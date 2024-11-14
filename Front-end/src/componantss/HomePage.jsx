import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search, ShoppingBag, User, Menu, Star, Clock, ArrowRight, Utensils, Bike, Gift } from 'lucide-react';



export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselImages = [
    "/placeholder.svg?height=400&width=1200&text=Delicious+Dishes",
    "/placeholder.svg?height=400&width=1200&text=Fresh+Ingredients",
    "/placeholder.svg?height=400&width=1200&text=Quick+Delivery",
    "/placeholder.svg?height=400&width=1200&text=Local+Restaurants",
    "/placeholder.svg?height=400&width=1200&text=Special+Offers",
  ];

  const foodItems = [
    { name: "Pizza", image: "/placeholder.svg?height=200&width=200&text=Pizza" },
    { name: "Burger", image: "/placeholder.svg?height=200&width=200&text=Burger" },
    { name: "Sushi", image: "/placeholder.svg?height=200&width=200&text=Sushi" },
    { name: "Salad", image: "/placeholder.svg?height=200&width=200&text=Salad" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container flex h-16 items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="relative">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <Utensils className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 transform rotate-45" />
            </div>
            <span className="font-bold text-xl text-orange-500">TastyExpress</span>
          </a>
          <nav className="ml-auto flex items-center space-x-4">
            <a href="/restaurants" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Restaurants
            </a>
            <a href="/deals" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Deals
            </a>
            <a href="/account" className="text-sm font-medium hover:text-orange-500 transition-colors">
              My Account
            </a>
            <Button variant="ghost" size="icon" className="hover:bg-orange-100 rounded-full">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-orange-100 rounded-full">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full">
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
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-800">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {foodItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[200px] rounded-full shadow-lg transition-transform hover:scale-105"
                  />
                  <p className="mt-2 text-lg font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 animate-fade-in-up">
              Trending Restaurants
            </h2>
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'American'].map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {[
                { name: "Pizza Perfection", cuisine: "Italian", rating: 4.8, deliveryTime: "20-30 min", image: "/placeholder.svg?height=200&width=300&text=Pizza" },
                { name: "Sushi Supreme", cuisine: "Japanese", rating: 4.9, deliveryTime: "25-35 min", image: "/placeholder.svg?height=200&width=300&text=Sushi" },
                { name: "Taco Fiesta", cuisine: "Mexican", rating: 4.7, deliveryTime: "15-25 min", image: "/placeholder.svg?height=200&width=300&text=Tacos" },
              ].map((restaurant, i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white">{restaurant.name}</h3>
                        <p className="text-sm text-white/80">{restaurant.cuisine}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm">{restaurant.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full group-hover:animate-pulse">
                      Order Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50 rounded-full">
                Explore More Restaurants
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800&text=Pattern')] opacity-10" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Why Food Lovers Choose TastyExpress
                  </h2>
                  <p className="max-w-[600px] mx-auto text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're not just delivering food, we're delivering experiences.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Culinary Variety", description: "Explore cuisines from around the world", icon: Utensils },
                  { title: "Lightning-Fast Delivery", description: "Hot food, delivered in a flash", icon: Bike },
                  { title: "Exclusive Foodie Rewards", description: "Earn points with every delicious bite", icon: Gift },
                ].map((feature, i) => (
                  <Card key={i} className="bg-white/10 backdrop-blur-lg border-none text-white">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="rounded-full bg-orange-400 p-3 ring-4 ring-orange-300/20">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-sm text-orange-100">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Download the TastyExpress App
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the full flavor experience on your mobile device. Order, track, and enjoy with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-2.72 4-5.5 0-2.52-2-3.5-3-3.5s-2.5 1-4 1-3-1-4-1-3 .98-3 3.5c0 2.78 1 5.5 4 5.5 1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M12 10.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" />
                    </svg>
                    App Store
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[60px] overflow-hidden border-[14px] border-gray-800 shadow-xl">
                  <img
                    src="/placeholder.svg?height=560&width=280&text=App+Screenshot"
                    alt="TastyExpress App"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 w-[148px] h-[18px] bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-b-[24px]" />
                  <div className="absolute bottom-2 w-[120px] h-[4px] bg-gray-800 left-1/2 transform -translate-x-1/2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white">
        <div className="container flex flex-col items-center justify-between space-y-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <ShoppingBag className="h-6 w-6 text-orange-500" />
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              © 2023 TastyExpress. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}