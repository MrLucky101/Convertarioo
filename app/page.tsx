import React from "react";
import Dropzone from "@/components/dropzone";
import Card from "@/components/Card"; // Adjust the path based on your project structure
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Title + Desc */}
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Free Unlimited File Conversions
        </h1>
        <p className="text-gray-400 text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
          Convert any file from one format to another in seconds for free
        </p>
      </div>

      {/* Upload Box */}
      <br />
      <Dropzone />

      <h2 className="text-center text-2xl mt-10 mb-10 font-semibold">
        How to convert your File?
      </h2>
      <hr />
      {/* Cards */}
      <div className="flex flex-wrap justify-center mt-10">
        <Card
          title="Upload Your File"
          description="To use this tool you have to first upload your file. Just click on upload or you can drag and drop it in here as well."
          image="/images/upload.svg"
        />
        <Card
          title="Choose Format"
          description="After you have uploaded your file. Now you just have to choose the format in which you want your file to be from our selected menu."
          image="/images/choose.svg"
        />
        <Card
          title="Download File"
          description="Now you can easily download your file by clicking on the download button."
          image="/images/download.svg"
        />
      </div>
      <h2 className="text-center text-2xl mt-10 mb-10 font-semibold">
        Supported Formats
      </h2>
      <hr />
      <br />
      <div className="converters">
        <a href="/jpg">JPG</a>
        <a href="/png">PNG</a>
        <a href="/bmp">BMP</a>
        <a href="/gif">GIF</a>
        <a href="/ico">ICO</a>
        <a href="/jpeg">JPEG</a>
        <a href="/raw">RAW</a>
        <a href="/svg">SVG</a>
        <a href="/tga">TGA</a>
        <a href="/tiff">TIFF</a>
        <a href="/tif">TIF</a>
        <a href="/webp">WEBP</a>
        <a href="/mp4">MP4</a>
        <a href="/m4v">M4V</a>
        <a href="/mp4v">MP4V</a>
        <a href="/3gp">3GP</a>
        <a href="/3g2">3G2</a>
        <a href="/avi">AVI</a>
        <a href="/mov">MOV</a>
        <a href="/wmv">WMV</a>
        <a href="/mkv">MKV</a>
        <a href="/flv">FLV</a>
        <a href="/ogv">OGV</a>
        <a href="/webm">WEBM</a>
        <a href="/h264">H264</a>
        <a href="/264">264</a>
        <a href="/hevc">HEVC</a>
        <a href="/265">265</a>
        <a href="/mp3">MP3</a>
        <a href="/wav">WAV</a>
        <a href="/ogg">OGG</a>
        <a href="/aac">AAC</a>
        <a href="/wma">WMA</a>
        <a href="/flac">FLAC</a>
        <a href="/m4a">M4A</a>
      </div>
      {/* Footer */}
      <h2 className="text-center text-2xl mt-10 mb-10 font-semibold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
    <AccordionTrigger>What file formats do you support?</AccordionTrigger>
    <AccordionContent>
    We support a variety of video, audio, images.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What’s the maximum file size allowed?</AccordionTrigger>
    <AccordionContent>
    An image, document or e-book file should have a size of at most 50 MB. An archive, video or audio file can have a size of up to 200 MB.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
    <AccordionContent>
    To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Can I share my account with others?</AccordionTrigger>
    <AccordionContent>
    No, sharing accounts is against our terms of service. Each user should have their own account for security and privacy reasons.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
    <AccordionContent>
    You can contact our customer support team via email at support@example.com or by phone at +1-800-123-4567 during our business hours.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-6">
    <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
    <AccordionContent>
    Yes, we offer a free trial period of 14 days for new users. Sign up on our website to start your free trial today.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-7">
    <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
    <AccordionContent>
    To cancel your subscription, log in to your account, go to the subscription settings, and follow the instructions to cancel.
    </AccordionContent>
  </AccordionItem>
</Accordion>

      <Footer />
    </div>
  );
};

export default Home;
