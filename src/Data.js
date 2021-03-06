import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

export const socialLinks = [
  {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OlegAba"
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/olegabalonski/"
  },
  {
    title: "Email",
    icon: MdEmail,
    url: "mailto:olegaba.developer@gmail.com"
  },
  {
    title: "Resume",
    icon: IoMdDocument,
    url: "http://www.OlegAba.com/resume.pdf"
  }
]

export const about = {
  title: "Oleg Abalonski",
  image: {
      source: './images/avatar.png',
      description: 'avatar'
  },
  description: `As an individual, I bring a strong skill set in technologies related 
  to Web and iOS development. Apart from utilizing several programming languages, I 
  have experience working with version control, network calls, API’s, third-party 
  libraries, frameworks, relational databases, multithreading, and an MVC & MVVM design 
  pattern. I can adapt to a fluid and dynamic development environment; I am comfortable 
  working with any computer/mobile OS and can transfer my skillset to any programming 
  language or technology that is required.`
}

export const instaQR = {
  title: "InstaQR",
  mainImage: "images/InstaQR/instaqr-1.png",
  secondaryImages: [
    "images/InstaQR/instaqr-2.png", 
    "images/InstaQR/instaqr-3.png", 
    "images/InstaQR/instaqr-4.png", 
    "images/InstaQR/instaqr-5.png", 
    "images/InstaQR/instaqr-6.png", 
    "images/InstaQR/instaqr-7.png"
  ],
  about: `InstaQR generates a live wallpaper by combining an image of your choice with 
  a scannable QR code. The QR code stores your share action (any link such as a social 
  media profile) and stays hidden until the live wallpaper is activated. Simply press into 
  the screen from your lockscreen and have the person you would like to share with scan 
  the barcode from their camera app.`,
  learned: [
    "Built a public Cocoapods Swift library",
    "Utilized multithreading for asynchronous background tasks",
    "Implemented an MVC and OOP design pattern",
    "Created dynamic templates with input validation for popular shareable services",
    "Setup Unit Tests using the XCTest framework",
    "Distributed and beta-tested the application using Testflight",
    "Built a barcode scanner with action validiation",
    "Set AutoLayout programmatically to create modular and scalable views",
    "Managed version control and handled code review, code fixes, and bug fixes",
    "Published and actively maintaining the project on App Store Connect",
  ],
  appleLink: {
    url: "https://apps.apple.com/us/app/instaqr-live-wallpaper-maker/id1514732973?ign-mpt=uo%3D4",
    image: {
      source: "https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-16&amp;kind=iossoftware&amp;bubble=ios_apps",
      description: "Download on iTunes"
    }
  },
  githubLink: {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OlegAba/InstaQR"
  }
}

export const projects = [
  {
    title: "LPLivePhotoGenerator",
    image: "images/Projects/LPLivePhotoGenerator.png",
    url: "https://github.com/OlegAba/LPLivePhotoGenerator"
  },
  {
    title: "SuperSnapcode",
    image: "images/Projects/SuperSnapcode.png",
    url: "https://github.com/OlegAba/SuperSnapcode"
  },
  {
    title: "Podcast Explorer",
    image: "images/Projects/PodcastExplorer.png",
    url: "https://github.com/OlegAba/PodcastEpisodeExplorer"
  },
  {
    title: "Movie Explorer",
    image: "images/Projects/MovieExplorer.png",
    url: "https://github.com/OlegAba/movie-explorer"
  },
  {
    title: "Product Landing Page",
    image: "images/Projects/ProductLandingPage.png",
    url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/ProductLandingPage"
  },
  {
    title: "Technical Documentation",
    image: "images/Projects/TechnicalDocumentation.png",
    url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/TechnicalDocumentationPage/"
  },
]