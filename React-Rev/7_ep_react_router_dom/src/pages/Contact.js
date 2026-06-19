import { Fragment } from "react/jsx-runtime"
import { OFFERS_LOGO_BASE_URL } from "../../utils/constants"
import { useRef, useState } from "react"
import OfferSlider from "../components/OfferSlider"
//ignore this name contact us
const ContactUs = () => {

    const offers = [
        {
            "info": {
                "header": "FLAT ₹125 OFF",
                "offerTag": "FLAT DEAL",
                "offerTagColor": "#E46D47",
                "offerIds": [
                    "b5d690d3-e521-40c6-aa0a-0ab983fe0bc5"
                ],
                "expiryTime": "1970-01-01T00:00:00Z",
                "couponCode": "USE FLAVORFUL",
                "description": "ABOVE ₹699",
                "offerType": "offers",
                "restId": "378311",
                "offerLogo": "offers/generic",
                "descriptionTextColor": "#7302060C",
                "primaryDescription": "USE FLAVORFUL"
            },
            "cta": {
                "type": "OFFER_HALF_CARD"
            }
        },
        {
            "info": {
                "header": "10% OFF UPTO ₹75",
                "offerTagColor": "#E46D47",
                "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/2dcd3eef-bcc5-4f48-9900-56e02ebe6564_Visa.png",
                "offerIds": [
                    "0c89891a-2913-4f63-a3a1-24f0e06be59b"
                ],
                "expiryTime": "1970-01-01T00:00:00Z",
                "couponCode": "USE VISAPLATINUMCC",
                "description": "ABOVE ₹600",
                "offerType": "offers",
                "restId": "378311",
                "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/2dcd3eef-bcc5-4f48-9900-56e02ebe6564_Visa.png",
                "descriptionTextColor": "#7302060C",
                "primaryDescription": "USE VISAPLATINUMCC"
            },
            "cta": {
                "type": "OFFER_HALF_CARD"
            }
        },
        {
            "info": {
                "header": "10% OFF UPTO ₹75",
                "offerTagColor": "#E46D47",
                "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/cbbae0d0-62ae-4172-818a-6d554bfad663_Visa.png",
                "offerIds": [
                    "78d89308-6dc6-478a-a502-e6b5686b0ce9"
                ],
                "expiryTime": "1970-01-01T00:00:00Z",
                "couponCode": "USE VISAPLATINUMDC",
                "description": "ABOVE ₹300",
                "offerType": "offers",
                "restId": "378311",
                "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/cbbae0d0-62ae-4172-818a-6d554bfad663_Visa.png",
                "descriptionTextColor": "#7302060C",
                "primaryDescription": "USE VISAPLATINUMDC"
            },
            "cta": {
                "type": "OFFER_HALF_CARD"
            }
        },
        {
            "info": {
                "header": "FLAT ₹150 OFF",
                "offerTagColor": "#E46D47",
                "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/6d66acda-f6fb-4363-820c-1457d26ec2a4_Axis.png",
                "offerIds": [
                    "c4b55db6-3ab4-4359-8f63-2ce74de95ae8"
                ],
                "expiryTime": "1970-01-01T00:00:00Z",
                "couponCode": "USE AXISREWARDS",
                "description": "ABOVE ₹500",
                "offerType": "offers",
                "restId": "378311",
                "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/6d66acda-f6fb-4363-820c-1457d26ec2a4_Axis.png",
                "descriptionTextColor": "#7302060C",
                "primaryDescription": "USE AXISREWARDS"
            },
            "cta": {
                "type": "OFFER_HALF_CARD"
            }
        },
        {
            "info": {
                "header": "10% OFF UPTO ₹50",
                "offerTagColor": "#E46D47",
                "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/339c60c8-d60f-4e00-aa82-96bcaa0a80c5_Visa.png",
                "offerIds": [
                    "fe38f2e8-100b-45e1-97bd-80500a954ed0"
                ],
                "expiryTime": "1970-01-01T00:00:00Z",
                "couponCode": "USE VISACLASSICDC",
                "description": "ABOVE ₹300",
                "offerType": "offers",
                "restId": "378311",
                "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/5/31/339c60c8-d60f-4e00-aa82-96bcaa0a80c5_Visa.png",
                "descriptionTextColor": "#7302060C",
                "primaryDescription": "USE VISACLASSICDC"
            },
            "cta": {
                "type": "OFFER_HALF_CARD"
            }
        }
    ]

    return (
        <div>
            <OfferSlider offers={offers}/>
        </div>
    )
}

export default ContactUs;