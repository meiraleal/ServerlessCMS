<script lang='ts'>

import { page } from '$app/stores'
import { b64Decode, b64Encode } from '$lib/b64';
import { onMount } from 'svelte';
import { PUBLIC_SERVERLESS_CMS } from '$env/static/public';

interface Feature {
		number: string;
		title: string;
		description: string;
	}

	interface ServerlessCMS {
		companyName: string;
		heroTitle: string;
		heroDescription: string;
		featuresTitle: string;
		featuresDescription: string;
		featuresList: Feature[];
	}
	b64Decode
	let baseIframeUrl = PUBLIC_SERVERLESS_CMS;	
	let hash = $page.url.hash.slice(1);
	let html;
	let iframeUrl:string = `${baseIframeUrl}${(hash || '').replace("%20","+")}`;
	let decodedHash = '';
	let ServerlessCMS: ServerlessCMS | '' = '';

	onMount(async () => {
		decodedHash = hash ? b64Decode(hash) : '';
		ServerlessCMS = parse(decodedHash);
	});
	
	function stringifyJSObject(obj) {
		const replacer = (key, value) => {
			if (typeof value === 'string') {
			return `"${value.replace(/"/g, '\\"')}"`;
			}
			return value;
		};

		return JSON.stringify(obj, replacer, 2)
			.replace(/\"([^(\")"]+)\":/g, '$1:').replace(/\\"/g, '');;
	}


	function parse(decodedHash) {
		if(!decodedHash) 
			return '';
		const chunks = decodedHash[Object.keys(decodedHash)?.[0]].split('---');		
		const jsObjectStr = chunks?.[1];
		html = chunks?.[2];
		try {
			return (new Function(`${jsObjectStr}; return ServerlessCMS;`))();
		}
		catch(error) {
			console.log("error parsing encoded file", { error });
			return '';
		}
	}
	
	
	$: {
		if(ServerlessCMS && html) {
			iframeUrl = `${baseIframeUrl}${b64Encode({["inmemory://model/src/index.astro"]: `
			---
			let ServerlessCMS = ${stringifyJSObject(ServerlessCMS)}
			---
			${html}
			`})}`;
			const iframe = document.querySelector('#preview-iframe');
			iframe?.contentWindow?.postMessage({ message: 'reload', newContent: `
			---
			let ServerlessCMS = ${stringifyJSObject(ServerlessCMS)}
			---
			${html}
			` }, '*');

		}
	}

	const getLabel = (key: string, index?: number, subKey?: string): string => {
    const labelName = subKey 
      ? `${key.charAt(0).toUpperCase() + key.slice(1)} ${index! + 1} - ${subKey.charAt(0).toUpperCase() + subKey.slice(1)}`
      : `${key.charAt(0).toUpperCase() + key.slice(1)}`;

    return labelName;
  };

  const getInputID = (key: string, index?: number, subKey?: string): string => {
    const inputID = subKey 
      ? `${key}${index}${subKey}`
      : `${key}`;

    return inputID;
  };

</script>

<div class="flex h-screen">
	<aside class="app-rail w-20">
		<div class="app-rail grid grid-rows-[auto_1fr_auto] overflow-y-auto bg-transparent border-r border-surface-500/30 w-20 h-full gap-0 ">
			<div class="app-bar-lead"></div>
			<div class="app-bar-default">
				<label class="app-rail-tile cursor-pointer" data-testid="app-rail-tile" title="">
					<div class="app-rail-wrapper w-full aspect-square flex flex-col justify-center items-stretch bg-primary-hover-token bg-primary-active-token">
						<div class="h-0 w-0 overflow-hidden"><input type="radio" name="docs" tabindex="-1" value="/docs"></div> 
						<div class="app-rail-interface text-center space-y-1">
							<div class="app-rail-lead "><i class="fa-solid fa-book text-2xl"></i></div> 
							<div class="app-rail-label font-bold text-xs "><span>Website</span></div>
						</div>
					</div>
				</label> 
				<hr class="opacity-30"> 
				<label class="app-rail-tile cursor-pointer" data-testid="app-rail-tile" title="">
					<div class="app-rail-wrapper w-full aspect-square flex flex-col justify-center items-stretch bg-primary-hover-token ">
						<div class="h-0 w-0 overflow-hidden"><input type="radio" name="elements" tabindex="-1" value="/elements"></div> 
						<div class="app-rail-interface text-center space-y-1">
							<div class="app-rail-lead ">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0.15 0.13 799.7 479.69" class="svg-icon inline-block outline-none fill-current w-6 h-6 " focusable="false" data-testid="svg-icon">
									<path d="M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13zM200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"></path>
								</svg>
							</div> 
							<div class="app-rail-label font-bold text-xs "><span>Settings</span></div>
						</div>
					</div>
				</label> 
			</div>
		</div>
	</aside>
	<section class="w-1/3 bg-gray-100 p-10 h-screen overflow-y-auto">
		<h2 class="text-xl mb-4 dark:text-white text-black">Page Editor</h2>
		<form>
			{#each Object.entries(ServerlessCMS) as [key, value] (key)}
				{#if typeof value === 'string'}
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for={getInputID(key)}>{getLabel(key)}</label>
					<input bind:value={ServerlessCMS[key]} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={getInputID(key)} type="text">
				</div>
				{:else}
				{#each value as item, index (index)}
					{#each Object.entries(item) as [subKey, subValue] (subKey)}
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for={getInputID(key, index, subKey)}>{getLabel(key, index, subKey)}</label>
						<input bind:value={item[subKey]} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={getInputID(key, index, subKey)} type="text">
					</div>
					{/each}
				{/each}
				{/if}
			{/each}
		</form>
	</section>
	
	<main class="w-2/3">
		<iframe key={iframeUrl} src={iframeUrl} id="preview-iframe" class="w-full h-full flex flex-col iframe" />		
	</main>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
