import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function BannerCarousel() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg max-h-[500px] bg-gray-200 shadow-lg">
      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000, // 3 seconds autoplay delay
          }),
        ]}
      >
        <CarouselContent>
          {[
            "https://static.vecteezy.com/system/resources/thumbnails/001/426/892/small/abstract-banner-web-template-free-vector.jpg",
            "https://static.vecteezy.com/system/resources/thumbnails/007/501/592/small_2x/abstract-design-for-banner-and-background-design-template-with-blue-color-concept-free-vector.jpg",
            "https://img.pikbest.com/origin/09/32/48/31UpIkbEsTbZS.jpg!w700wp",
            "https://as1.ftcdn.net/v2/jpg/05/36/23/60/1000_F_536236056_8tA6RPhBAjvvmTnoHckrfKuw4JzEZlJ8.jpg",
            "https://img.freepik.com/premium-vector/modern-blue-abstract-background-banner-square-geometric-fluid-blue-abstract-banner-design-background_181182-28910.jpg",
          ].map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-[450px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious />

        {/* Next Button */}
        <CarouselNext />
      </Carousel>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-white/80 hover:bg-blue-500 cursor-pointer transition-all"
          ></div>
        ))}
      </div>
    </div>
  );
}
