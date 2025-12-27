window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })


// core
const {
    addPluginListener,
    invoke,
    Channel,
    checkPermissions,
    convertFileSrc,
    isTauri,
    PluginListener,
    requestPermissions,
    Resource,
    transformCallback,
    SERIALIZE_TO_IPC_FN,
} = window.__TAURI__.core

// app
const {
    defaultWindowIcon,
    fetchDataStoreIdentifiers,
    getIdentifier,
    getName,
    getTauriVersion,
    getVersion,
    hide,
    removeDataStore,
    setDockVisibility,
    setTheme,
    show,
} = window.__TAURI__.app

// event
const { emit, emitTo, listen, once } = window.__TAURI__.event

// dpi
const {
    LogicalPosition,
    LogicalSize,
    PhysicalPosition,
    PhysicalSize,
    Position,
    Size,
} = window.__TAURI__.dpi

// image
const { Image, transformImage } = window.__TAURI__.image

// menu
const {
    CheckMenuItem,
    IconMenuItem,
    itemFromKind,
    Menu,
    MenuItem,
    NativeIcon,
    PredefinedMenuItem,
    Submenu,
} = window.__TAURI__.menu

// path
const {
    appDataDir,
    appConfigDir,
    appLocalDataDir,
    appCacheDir,
    appLogDir,
    audioDir,
    cacheDir,
    configDir,
    dataDir,
    desktopDir,
    documentDir,
    downloadDir,
    executableDir,
    fontDir,
    homeDir,
    pictureDir,
    publicDir,
    resourceDir,
    runtimeDir,
    templateDir,
    videoDir,
    sep,
    delimiter,
    basename,
    dirname,
    extname,
    join,
    normalize,
    resolve,
    isAbsolute,
    localDataDir,
    resolveResource,
    tempDir,
} = window.__TAURI__.path

// 调用新建窗口等函数
const { WebviewWindow } = window.__TAURI__.webviewWindow

// 等等接口，请参考Tauri2官方文档：https://v2.tauri.app/reference/javascript/api/#vanilla-js-api


const { WebviewWindow } = window.__TAURI__.webviewWindow

const webview = new WebviewWindow('my-label', {
    url: 'https://PakePlus.com/',
    x: 500,
    y: 500,
    width: 800,
    height: 400,
    focus: true,
    title: 'PakePlus Window',
    alwaysOnTop: true,
    center: true,
    resizable: true,
    transparent: false,
    visible: true,
})
webview.once('tauri://created', function () {
    // webview successfully created
    console.log('new webview created')
})
webview.once('tauri://error', function (e) {
    // an error happened creating the webview
    console.log('new webview error', e)
})







const { invoke } = window.__TAURI__.core

if ('__TAURI__' in window) {
    await invoke('download_file', {
        url: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
        savePath: 'test.png',
        fileId: 'test',
    })
}







const { listen } = window.__TAURI__.event

listen('download_progress', (event: any) => {
    downloadProgress.value = Number(
        ((event.payload.downloaded / event.payload.total) * 100).toFixed(2)
    )
})






const { invoke } = window.__TAURI__.core

if ('__TAURI__' in window) {
    invoke('run_command', { command: 'ls -l' })
}
