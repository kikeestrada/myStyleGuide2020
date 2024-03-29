import {swDetecter} from './modules/swDetecter';
import topNav from './modules/topNav'
import searchFilter from './modules/searchFilter'
import youtubeVideo from './modules/youtube-video'
import {Prism} from '../../node_modules/prismjs/prism'
import tabs from './modules/tabs'
import accordion from './modules/accordion' 
import {tnsCarousell, tnsSingle, tnsVertical, tnsSyncing} from "./modules/tns-slider";

	swDetecter();
	
(()=>{
	topNav();
	tnsCarousell();
	tnsSingle();
	tnsVertical();
	tnsSyncing();
	if (document.body.classList.contains('home')) {
		// functions here
		youtubeVideo()
	}else if (document.body.classList.contains('page2')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('page3')) {
		// functions here
		tabs();
		accordion();
	}else if (document.body.classList.contains('page4')) {
		// functions here
	}
})();
