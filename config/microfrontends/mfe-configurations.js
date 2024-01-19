/*
type MfeModel = {
	type: 'module' | 'component'
	remoteName: string
	remoteEntry: string
	remoteEntryDev: string
	exposedComponent?: string | string[]
	exposedModule?: string
}
*/

const MICROFRONTENDS = {
	exposeApp: {
		type: 'component',
    remoteName: 'exposeApp',
    remoteEntry: 'https://exposeapp-def-ithub.stg01.samoletgroup.ru',
    exposedComponent: ['./ExposeAppComp', './YellowCar'],
    remoteEntryDev: 'http://localhost:3002',
  },

	mfe2: {
		type: 'module',
    remoteName: 'mfe2',
    remoteEntry: 'https://exposeapp-def-ithub.stg01.samoletgroup.ru',
    exposedModule: 'Mfe2Module',
    remoteEntryDev: 'http://localhost:3002',
  },
}

module.exports = {
	MICROFRONTENDS,
}
