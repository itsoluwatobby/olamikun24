import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const eventTypes = [
  {
    eventType: "Engagement", eventTime: "2nd March, 2024", Time: "7am", 
    locationLink: 'https://maps.app.goo.gl/ouhYEmGhcxLKsf3A7',
    image: 'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIMG-20240122-WA0012.jpg?alt=media&token=c2bfab94-df6f-4053-95fc-905f19661cb7',
    venue: "Alma-Rohm Baptism Church Multipurpose hal, Ile Maarun, Hospital Road, Iwo Osun State."
  },
  {
    eventType: "Church Ceremony", eventTime: "2nd March, 2024", Time: "10am", 
    locationLink: 'https://maps.app.goo.gl/Vwd1yQoXL4YUH8xQ8',
    image: 'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7255.jpg?alt=media&token=f97272d1-fa9b-4898-b509-6970ae266513',
    venue: "Victory Baptism Church, Beside Forestry, off Ile Igbo Road, Iwo Osun State."
  },
  {
    eventType: "Reception", eventTime: "2nd March, 2024", Time: "After church ceremony", 
    locationLink: 'https://maps.app.goo.gl/ouhYEmGhcxLKsf3A7',
    image: 'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7185.jpg?alt=media&token=e7d448ec-7ce3-40f0-8640-d2587e7257a2',
    venue: "Alma-Rohm Baptism Church Multipurpose hall, Ile Maarun, Hospital Road, Iwo Osun State."
  },
]

export const Socials = {
  Groom: [
    { link: 'https://www.facebook.com/Lekuzege?mibextid=ZbWKwL', icon: FaFacebookF }, 
    { link: 'https://x.com/itsbiggiebiggie?s=21', icon: FaXTwitter }, 
    { link: 'https://www.instagram.com/olanipekunolalekan?igsh=dHB1NDk0MThzMzdw', icon: FaInstagram }
  ],
  Bride: [
    { link: '', icon: FaFacebookF }, 
    { link: '', icon: FaXTwitter }, 
    { link: 'https://www.instagram.com/kunmi_klothing?igsh=NTc4MTIwNjQ2YQ==', icon: FaInstagram }
  ]

} 
