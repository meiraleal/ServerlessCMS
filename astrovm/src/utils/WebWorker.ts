// Based on https://github.com/okikio/bundle/blob/main/src/ts/util/WebWorker.ts
import { EventEmitter } from '@okikio/emitter';
import {
    SharedWorkerPolyfill as WebWorker,
    SharedWorkerSupported,
} from "@okikio/sharedworker";

import EMPTY_WORKER_URL from "worker:../editor/workers/empty.ts";

// https://stackoverflow.com/questions/62954570/javascript-feature-detect-module-support-for-web-workers
export const ModuleWorkerTest = () => {
    let support = false;
    const test = {
        get type() {
            support = true;
            return "module";
        },
    };

    try {
        // We use "blob://" as url to avoid an useless network request.
        // This will either throw in Chrome
        // either fire an error event in Firefox
        // which is perfect since
        // we don't need the worker to actually start,
        // checking for the type of the script is done before trying to load it.

        // @ts-ignore
        // `data:application/javascript;base64,${Buffer.from("export {};").toString('base64')}`
        // const worker = new Worker(`blob://`, test);

        // Use an empty worker file, to avoid 
        const worker = new Worker(
            EMPTY_WORKER_URL.replace(/\.js$/, ".mjs"),
            test as WorkerOptions
        );

        worker?.terminate();
        return support;
    } catch (e) {
        console.log(e);
    }

    return false;
};

export let ModuleWorkerSupported = ModuleWorkerTest();
export const WorkerType: WorkerOptions["type"] = ModuleWorkerSupported
    ? "module"
    : "classic";

export const WorkerConfig = (url: URL | string, name?: WorkerOptions["name"]) => {
    return [url.toString().replace(/\.js$/, WorkerType == "module" ? ".mjs" : ".js"), {
        name,
        type: WorkerType
    }] as [string | URL, WorkerOptions];
}; 

console.log(
    `This browser supports ${WorkerType} workers!`
);
console.log(
    `This browser supports ${SharedWorkerSupported ? "Shared Web Workers" : "Normal Web Workers"
    }!`
);

import BUILD_WORKER_URL from 'worker:../editor/workers/build.ts';
export const WorkerEvents = new EventEmitter(); 
export const BuildWorkerOptions = { 
    name: 'build-worker',
    type: WorkerType
} as WorkerOptions;

export const BuildWorker = new WebWorker(BUILD_WORKER_URL, BuildWorkerOptions); 
BuildWorker?.start?.();

export { WebWorker };
export default WebWorker;

