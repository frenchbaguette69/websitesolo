"use client"

import { useState } from 'react'
import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"

const categories = [
  { id: "pizzas", name: "Pizza's" },
  { id: "salads", name: "Salads" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
] as const;

const menuItems = {
  pizzas: [
    { name: "Pizza grubbenvorst", description: "Tomatensaus, kaas, friet en döner", price: 13.50 },
    { name: "Pizza mix", description: "Tomatensaus, kaas en 2 soorten vlees", price: 13.00 },
    { name: "Pizza borromea", description: "Tomatensaus, kaas, ham en oregano", price: 14.50 },
  ],
  salads: [
    { name: "Caesar Salad", description: "Romaine lettuce, croutons, parmesan cheese", price: 8.50 },
    { name: "Greek Salad", description: "Tomatoes, cucumbers, olives, feta cheese", price: 9.00 },
  ],
  drinks: [
    { name: "Coca Cola", description: "330ml", price: 2.50 },
    { name: "Sparkling Water", description: "500ml", price: 2.00 },
  ],
  desserts: [
    { name: "Tiramisu", description: "Classic Italian dessert", price: 6.50 },
    { name: "Gelato", description: "Assorted flavors", price: 4.50 },
  ],
}

export default function Home() {
  const [cartItems, setCartItems] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState("pizzas")

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Pizzeria Grubbenvorst</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/menu">Menu</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/reviews">Reviews</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/contact">Contact</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/about">About</a>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through our website
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-3">
                <a href="/menu">Menu</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="relative">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Pizzeria Grubbenvorst
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enjoy our delicious pizzas made with fresh ingredients and authentic recipes.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Order Now</Button>
                <Button variant="outline">View Menu</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Menu</h2>
            <Tabs defaultValue="pizzas" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="space-y-6">
                    {menuItems[category.id].map((item, index) => (
                      <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
                        <div className="flex-grow p-6">
                          <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold">€{item.price.toFixed(2)}</span>
                              <Button onClick={() => setCartItems(cartItems + 1)}>Add to Cart</Button>
                            </div>
                          </CardContent>
                        </div>
                        <div className="w-full md:w-1/3 relative h-48 md:h-auto">
                          <Image
                            src={`/placeholder.svg?height=200&width=300`}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Pizzeria Grubbenvorst. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}