import * as components from "./components/export";
import "./components/export"
import { navigate } from "./store/actions";
import "./screens/main"
import "./screens/profile"
import "./screens/landing"
import "./screens/moodboard"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/navegation";




class AppContainer extends  HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {

    
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            switch (appState.screen) {
          
                case Screens.LANDING:
                    const landing = this.ownerDocument.createElement('app-landing');
                    this.shadowRoot?.appendChild(landing);
                    break;
    
                case Screens.SIGNUP:
                    const register = this.ownerDocument.createElement('app-register');
                    this.shadowRoot?.appendChild(register);
                    break;
    
                case Screens.LOGIN:
                    const login = this.ownerDocument.createElement('app-login');
                    this.shadowRoot?.appendChild(login);
                    break;

                case Screens.DASHBOARD:
                    const dashboard = this.ownerDocument.createElement('app-dashboard');
                    this.shadowRoot?.appendChild(dashboard);
                    break;
    
                case Screens.MOODBOARD:
                    const favorites = this.ownerDocument.createElement('app-favorites');
                    this.shadowRoot?.appendChild(favorites);
                    break;
    
                case Screens.FRIENDS:
                    const friends = this.ownerDocument.createElement('app-friends');
                    this.shadowRoot?.appendChild(friends);
                    break;
    
                case Screens.PROFILE:
                    const profile = this.ownerDocument.createElement('app-profile');
                    this.shadowRoot?.appendChild(profile);
                    break;
            
                default:
                    break;
            }
         }
         
        }
     }   

customElements.define("app-container", AppContainer)
export default AppContainer;