import {program} from "commander";
import FormData from "form-data";

import * as fs from "fs";
import {authenticator, login, fetch_application_urls_from_api} from "./utils.js";


program
    .option('-t, --theme <theme>', 'Theme to be deployed')
    .option('-u, --username <username>', 'User used for uploading the theme')
    .option('-p, --password <password>', 'Password used for uploading the theme')
    .option('-a, --activate', 'Activate the theme')
program.parse();

const options = program.opts();

const ploneSiteUrls = await fetch_application_urls_from_api(options.theme)

for (const ploneSiteUrl of ploneSiteUrls) {
    console.log(`Authenticating to ${ploneSiteUrl}`)
    const client = await login(ploneSiteUrl, options.username, options.password)
    let bodyFormData = new FormData();
    const stream = fs.createReadStream(options.source);

    const res = await client.get(`${ploneSiteUrl}/@@theming-controlpanel)`)
    const token = authenticator(res.data)


    const formHeaders = bodyFormData.getHeaders();
    bodyFormData.append('themeArchive', stream, {
        filepath: options.source,
        filename: 'theme.zip'
    });
    bodyFormData.append('replaceExisting:boolean', "1");
    bodyFormData.append('form.button.Import', "1");
    bodyFormData.append('_authenticator', token);

    console.log(`Uploading ${option.theme} to ${ploneSiteUrl}`)
    await client.post(`${ploneSiteUrl}/@@theming-controlpanel`, bodyFormData, {
        params: {fileName: 'theme.zip'},
        headers: {...formHeaders},
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
    })
    console.log(`Done uploading ${option.theme} to ${ploneSiteUrl}`)
}