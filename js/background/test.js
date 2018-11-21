// Time tests
let time
let date


// ## seconds ago
Core.logd('# 5 seconds ago')
time = Date.now() - 5 * 1000 // 5 sec ago
Core.logd(Core.timeColloquial(new Date(time)))

// ## minutes ago
Core.logd('# 5 minutes ago')
time = Date.now() - 5 * 60 * 1000 // 5 min ago
Core.logd(Core.timeColloquial(new Date(time)))

// ## hours ago
Core.logd('# 2 hours ago')
time = Date.now() - 2 * 60 * 60 * 1 * 1000 // 2 hours ago
Core.logd(Core.timeColloquial(new Date(time)))

// at H:MM [AM|PM]
Core.logd('# at 10:01 AM')
time = Date.now() - 4 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))

// yesterday at H:MM [AM|PM]
Core.logd('# yesterday at 9:31 AM')
time = Date.now() - 24 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))

// on M/DD at H:MM [AM|PM]
Core.logd('# on 9/19 at 9:31 AM')
time = Date.now() - 5 * 24 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))

// on M/DD/YY at H:MM [AM|PM]
Core.logd('# on 9/19/18 at 9:31 AM')
time = Date.now() - 365 * 24 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))

// tomorrow at H:MM [AM|PM]
Core.logd('# tomorrow at 2:07 AM')
time = Date.now() + 28 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))

// on M/DD/YY at H:MM [AM|PM]
Core.logd('# on 9/27/18 at 9:31 AM')
time = Date.now() + 3 * 24 * 60 * 60 * 1 * 1000
Core.logd(Core.timeColloquial(new Date(time)))