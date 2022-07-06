import FormData from "form-data";
import {CookieJar} from "tough-cookie"
import {wrapper} from "axios-cookiejar-support";
import axios from "axios";
import * as path from "path";
import {readFile} from 'fs/promises';


export async function login(url, username, password) {
    const login_url = `${url}/failsafe_login`;

    let bodyFormData = new FormData();
    bodyFormData.append('came_from', url);
    bodyFormData.append('__ac_name', username);
    bodyFormData.append('__ac_password', password);
    bodyFormData.append('buttons.login', 'Se connecter');

    const jar = new CookieJar();
    const client = wrapper(axios.create({ jar }));

    await client.post(login_url, bodyFormData, {
        withCredentials: true,
        headers: {"Content-Type": "multipart/form-data", Accept: "text/html,application/xhtml+xml",},
    });

    return wrapper(axios.create({ jar }));
}

export function authenticator(body) {
    let match = body.match(/name="_authenticator" value="([^"]+)"/);
    return match ? match[1] : '';
}


async function read_imio_config(folder) {
    const packageJson = JSON.parse(
        await readFile(path.resolve(folder) + "/package.json")
    );
    return packageJson.imioConfig ? packageJson.imioConfig : {defaultConfig}
}

export async function fetch_application_urls_from_api(folder) {
    const imioConfig = await read_imio_config(folder);
    const INFRA_API_URL = process.env.INFRA_API_URL;
    const response = await axios.get(INFRA_API_URL + "/applications")

    const urls = []
    for (const app of response.data.applications) {
        if (app["application_name"] === imioConfig.application_name
            && imioConfig.environments.includes(app["environment"])) {
            urls.push(app['vhost_name'])
        }
    }
    return urls;
}
