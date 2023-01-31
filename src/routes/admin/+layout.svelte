<script>
	import {
	  Header,
	  HeaderUtilities,
	  HeaderAction,
	  HeaderGlobalAction,
	  HeaderPanelLinks,
	  HeaderPanelDivider,
	  HeaderPanelLink,
	  SideNav,
	  SideNavItems,
	  SideNavMenu,
	  SideNavMenuItem,
	  SideNavLink,
	  SkipToContent,
	  Content,
	  Grid,
	  Row,
	  Column,
	} from "carbon-components-svelte";
	import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
	import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
	import Sidebar from "../../componenets/Sidebar.svelte";
  
	let isSideNavOpen = false;
	let isOpen1 = false;
	let isOpen2 = false;
  </script>
  
  <Header company="RepairB" platformName="Store Owner" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
	  <SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
	  <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
	  <HeaderAction
		bind:isOpen={isOpen1}
		icon={UserAvatarFilledAlt}
		closeIcon={UserAvatarFilledAlt}
	  >
		<HeaderPanelLinks>
		  <HeaderPanelDivider>User Info</HeaderPanelDivider>
		  <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
		  <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
		  <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
		  
		 
		  <HeaderPanelDivider>Logout</HeaderPanelDivider>
		  <HeaderPanelLink>Logout</HeaderPanelLink>
		</HeaderPanelLinks>
	  </HeaderAction>
	 
	</HeaderUtilities>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen} style="background-color:black;text-color:white">
	<Sidebar/>
  </SideNav>
  
  <Content>
	
		  <slot/>
	
  </Content>
  
