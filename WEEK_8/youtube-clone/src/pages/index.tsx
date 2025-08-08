import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard"


export default function Home() {
  return (
    <div>
      <VideoCard title={"Beach Music | Chill Music to Calm your mind"}
        image = {"photo.jpg"}
        thumbImage = {"thumb.jpg"}
        author = {"DJ Afro Beats"}
        views = {"4M"}
        timestamp = {"4 days ago"}
       ></VideoCard>

    </div> 
  );
}
