/** @param {import('@roots/bud').Bud} bud */

export default async (bud) => {
	bud.setPath({
		"@src": "resources/assets/",
		"@dist": "public",
	})

	bud.entry({
		'app': ['scripts/app.js', 'styles/app.scss'],
		'admin': ['scripts/admin.js', 'styles/admin.scss'],
	})

	bud.runtime(false)

	bud.devtool()

	// bud.setUrl(3030)
	// bud.setPath({'@certs' : '/Users/tombroucke/.config/valet/Certificates'})
    // bud.proxy("https://smappee.test")
    // bud.serve({
	// 	host: "smappee.test",
	// 	cert: bud.path('@certs/smappee.test.crt'),
	// 	key: bud.path('@certs/smappee.test.key'),
    // })
}  
