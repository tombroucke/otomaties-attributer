/** @param {import('@roots/bud').Bud} bud */

export default async (bud) => {
	//bud.setUrl(3030)
	//bud.setPath({'@certs' : '/Users/mathiasdb/.config/valet/Certificates'})
    bud
		.serve(3333)
		.proxy("https://smappee.test")
		.setPublicUrl("https://smappee.test:3333");
}  
