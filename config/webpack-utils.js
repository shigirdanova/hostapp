const { MICROFRONTENDS } = require('./microfrontends/mfe-configurations')

const getRemoteEntry = (name, isDev) => {
	const { remoteName, remoteEntry, remoteEntryDev } = MICROFRONTENDS[name]

	return {
		[remoteName]: isDev
		? `${remoteName}@${remoteEntryDev}/remoteEntry.js`
		: `${remoteName}@${remoteEntry}/remoteEntry.js`,
	}
  }

module.exports = {
	getRemoteEntry,
}
