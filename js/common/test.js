// Alert developer that debugging is still enabled
Core.alertIfVariable(Core.IS_DEBUGGING_ENABLED,
    'Core.IS_DEBUGGING_ENABLED set to true',
    'STORAGE_LOCAL_KEY_LAST_DEBUGGING_ALERT',
    10 * 60 * 1000)

// Alert developer that logging is still enabled
Core.alertIfVariable(Core.LOG_LEVEL_DEBUG || Core.LOG_LEVEL_INFO || Core.LOG_LEVEL_TEST,
    'One of the Core.LOG_LEVEL_* is set to true',
    'STORAGE_LOCAL_KEY_LAST_LOG_LEVEL_ALERT',
    10 * 60 * 1000)

    Core.logd()