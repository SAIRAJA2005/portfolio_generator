import { LightningElement , wire, api} from 'lwc'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/portfolio__c.Designation__c'

export default class Portfolio extends LightningElement {

    @api recordId // = 'a00dL00000RgCzhQAF'

    @api linkedinUrl //= 'https://www.linkedin.com/in/sairaja-saride-b4292725b/'
    @api githubUrl //= 'https://github.com/SAIRAJA2005'
    @api trailheadUrl //= 'https://www.salesforce.com/trailblazer/nh8hq9tz7qsqp0v7ys'

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    PortfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("record Data" , JSON.stringify(data))
    //     }
    //     if(error){
    //         console.error('Error in fetching record data', error);
    //     }
    // }

    get fullName(){
        return getFieldValue(this.PortfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.PortfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.PortfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.PortfolioData.data, DESIGNATION)
    }
}