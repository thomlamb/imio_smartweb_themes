.PHONY: update
update:
	echo $(foldername)
	pnpm build --theme=$(foldername)