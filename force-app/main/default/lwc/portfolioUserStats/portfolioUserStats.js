import { LightningElement , api} from 'lwc';
//import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioUserStats extends LightningElement {
    trailheadRankImg //= `${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`
    @api badges //= '100'
    @api points //= '70,000'
    @api trails //= '17+'
    @api rank
    renderedCallback(){
        if(this.rank){
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadRankImg = url
        }
    }
    
}