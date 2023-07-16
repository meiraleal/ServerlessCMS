<script lang='ts'>
	import { page } from '$app/stores'
	let baseIframeUrl = "http://localhost:3000/play/";	
	const iframeUrl:string = `${baseIframeUrl}${($page.url.hash || '').replace("%20","+")}`;
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
							<div class="app-rail-label font-bold text-xs "><span>Tailwind</span></div>
						</div>
					</div>
				</label> 
			</div>
		</div>
	</aside>

	<section class="w-1/3 bg-gray-100">
		<form class="p-5">
			<h2 class="text-xl mb-4">Page Editor</h2>

			<label for="title" class="block mb-2 text-sm text-gray-600">Title</label>
			<input type="text" id="title" name="title" class="mb-4 block w-full p-2 border border-gray-200 rounded-md" placeholder="Title...">

			<label for="description" class="block mb-2 text-sm text-gray-600">Description</label>
			<textarea id="description" name="description" class="mb-4 block w-full p-2 border border-gray-200 rounded-md" placeholder="Description..." rows="4"></textarea>

			<button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
		</form>
	</section>
	<main class="w-2/3">
		<iframe src={iframeUrl} class="w-full h-full flex flex-col iframe"/>
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
