@Library('libpipelines@master') _

hose {
    EMAIL = 'front'
    MODULE = 'egeo-web'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/egeo-web'
    LANG = 'typescript'

    DEV = { config ->

        doCompile(config)
        doUT(config)
        doPackage(config)

        parallel(QC: {
            doStaticAnalysis(config)
        }, DEPLOY: {
            doDeploy(config)
      //   }, DOC: {  // Waiting for final web that can replace old
      //       doDoc(config)
        }, failFast: config.FAILFAST)
    }
}
