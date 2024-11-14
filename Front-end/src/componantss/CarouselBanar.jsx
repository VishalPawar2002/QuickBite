import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, User, Menu, Star, Clock, ArrowRight, Utensils, Bike, Gift } from 'lucide-react';

function CarouselBanar() {
  const carouselImages = [
    "https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-733.jpg?t=st=1731584184~exp=1731587784~hmac=64f35efa60b6a9ea7c8fd94724f880966e828753a3156e68ba54d1a3d0e3a642&w=1380",
    "https://img.freepik.com/free-psd/food-delivery-social-media-posts_23-2148871374.jpg?t=st=1731584676~exp=1731588276~hmac=b9efc09fa8fb27c7b1e3d13f171382d744b6430a66935aad2111574ccff52788&w=1380",
    "https://img.freepik.com/free-psd/instagram-posts-collection-moving-company_23-2148600499.jpg?t=st=1731585080~exp=1731588680~hmac=10888e4e0e91491422942854cbfa0a217f1ea550cd7f60f97e3a1327ade6e75c&w=1380",
    "https://th.bing.com/th/id/OIP.TKIdzFAe_YMeYQ6Uh7MrhAHaEK?rs=1&pid=ImgDetMain",
    "https://img.freepik.com/free-vector/gradient-indian-restaurant-facebook-template_23-2149429440.jpg?t=st=1731585552~exp=1731589152~hmac=564020750b4cdcd3ea9cb33578c0fc042745a151e17e2a3e4c2129d720e7aca3&w=1060",
  ];
  return (
    <div>
      <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[400px]">
                    <img
                      src={src}
                      alt={`Featured dish ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <h1 className="text-4xl font-bold mb-4">Discover Delicious Food Near You</h1>
                        <div className="max-w-md mx-auto">
                          <form className="flex space-x-2">
                            <Input className="flex-1 bg-white/90 placeholder:text-gray-500 rounded-full text-black"
                              placeholder="Enter your address..."
                              type="text"/>
                            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                              <Search className="mr-2 h-4 w-4" />
                              Find Food
                            </Button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

    </div>
  )
}

export default CarouselBanar;

