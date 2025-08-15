import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { ShoppingCart, Search, Star, Heart, Menu, X, Plus, Minus, Instagram, MessageCircle, ZoomIn } from 'lucide-react'
import logoHorizontal from './assets/logo_horizontal.png'
import logoHorizontal2 from './assets/logo_horizontal2.png'
import heroBgImage from './assets/LogoBrancaComFundoAzul-Marilho.png'
import videoPlaceholder from './assets/promocao.png'
import produto1 from './assets/produto1.png'
import produto2 from './assets/produto2.jpg'
import './App.css'

function App() {
  // Estados principais
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState({})
  const [showVideoModal, setShowVideoModal] = useState(true)
  const [showWhatsappChat, setShowWhatsappChat] = useState(false)

  // NEW: controle de imagem em fullscreen (lupa)
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const openImageFullscreen = (imageUrl) => setFullscreenImage(imageUrl)
  const closeImageFullscreen = () => setFullscreenImage(null)

  // Fecha no ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && fullscreenImage) closeImageFullscreen()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [fullscreenImage])

  // Controle do modal com tempo mínimo
  const [minTimePassed, setMinTimePassed] = useState(true)
  const modalRef = useRef(null)

  // Favoritos
  const [favorites, setFavorites] = useState([])
  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  // 0,2s de exibição mínima ao abrir o modal
  useEffect(() => {
    if (showVideoModal) {
      setMinTimePassed(false)
      const t = setTimeout(() => setMinTimePassed(true), 200)
      return () => clearTimeout(t)
    } else {
      setMinTimePassed(false)
    }
  }, [showVideoModal])

  // Fechar ao clicar fora (apenas após 0,2s)
  const handleOverlayMouseDown = () => {
    if (minTimePassed) setShowVideoModal(false)
  }

  const stopPropagation = (e) => e.stopPropagation()

  // Mock de produtos
  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Pijama Infantil Lua e Estrelas', description: 'Pijama super confortável com estampa de lua e estrelas, perfeito para uma noite de sonhos.', price: 45.90, image: produto1, category: 'pijamas', sizes: ['P', 'M', 'G'], stock: 10, rating: 4.8 },
      { id: 2, name: 'Conjunto Sonho Dourado', description: 'Conjunto delicado com detalhes dourados, ideal para momentos especiais de descanso.', price: 52.90, image: produto2, category: 'conjuntos', sizes: ['P', 'M', 'G', 'GG'], stock: 8, rating: 4.9 },
      { id: 3, name: 'Camisola Nuvem Rosa', description: 'Camisola em tecido macio com estampa de nuvens, proporcionando máximo conforto.', price: 38.90, image: produto1, category: 'camisolas', sizes: ['P', 'M', 'G'], stock: 12, rating: 4.7 },
      { id: 4, name: 'Pijama Família Estrelas', description: 'Pijama coordenado para toda a família, criando momentos únicos de união.', price: 89.90, image: produto2, category: 'familia', sizes: ['PP', 'P', 'M', 'G', 'GG'], stock: 5, rating: 5.0 },
      { id: 5, name: 'Roupão Infantil Unicórnio', description: 'Roupão fofinho com capuz de unicórnio, perfeito para após o banho.', price: 65.90, image: produto1, category: 'roupoes', sizes: ['P', 'M', 'G'], stock: 10, rating: 4.6 },
      { id: 6, name: 'Conjunto Sonho Azul', description: 'Conjunto em tons de azul com estampa celestial, ideal para noites tranquilas.', price: 48.90, image: produto2, category: 'conjuntos', sizes: ['P', 'M', 'G'], stock: 7, rating: 4.8 },
      { id: 7, name: 'Pijama Infantil Lua e Estrelas', description: 'Pijama super confortável com estampa de lua e estrelas, perfeito para uma noite de sonhos.', price: 45.90, image: produto1, category: 'pijamas', sizes: ['P', 'M', 'G'], stock: 10, rating: 4.8 },
      { id: 8, name: 'Conjunto Sonho Dourado', description: 'Conjunto delicado com detalhes dourados, ideal para momentos especiais de descanso.', price: 52.90, image: produto2, category: 'conjuntos', sizes: ['P', 'M', 'G', 'GG'], stock: 8, rating: 4.9 },
      { id: 9, name: 'Pijama Infantil Lua e Estrelas', description: 'Pijama super confortável com estampa de lua e estrelas, perfeito para uma noite de sonhos.', price: 45.90, image: produto1, category: 'pijamas', sizes: ['P', 'M', 'G'], stock: 10, rating: 4.8 },
      { id: 10, name: 'Conjunto Sonho Dourado', description: 'Conjunto delicado com detalhes dourados, ideal para momentos especiais de descanso.', price: 52.90, image: produto2, category: 'conjuntos', sizes: ['P', 'M', 'G', 'GG'], stock: 8, rating: 4.9 },
      { id: 11, name: 'Pijama Infantil Lua e Estrelas', description: 'Pijama super confortável com estampa de lua e estrelas, perfeito para uma noite de sonhos.', price: 45.90, image: produto1, category: 'pijamas', sizes: ['P', 'M', 'G'], stock: 10, rating: 4.8 },
      { id: 12, name: 'Conjunto Sonho Dourado', description: 'Conjunto delicado com detalhes dourados, ideal para momentos especiais de descanso.', price: 52.90, image: produto2, category: 'conjuntos', sizes: ['P', 'M', 'G', 'GG'], stock: 8, rating: 4.9 }

    ]
    setProducts(mockProducts)
  }, [])

  // Filtros
  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Carrinho
  const addToCart = (product) => {
    const size = selectedSize[product.id] || product.sizes[0]
    const quantity = 1
    const cartId = `${product.id}-${size}`
    const existing = cart.find(i => i.cartId === cartId)
    if (existing) {
      setCart(cart.map(i => i.cartId === cartId ? { ...i, quantity: i.quantity + quantity } : i))
    } else {
      setCart([...cart, { ...product, selectedSize: size, quantity, cartId }])
    }
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId)
    } else {
      setCart(cart.map(item => item.cartId === cartId ? { ...item, quantity: newQuantity } : item))
    }
  }

  const cartTotal = cart.reduce((t, i) => t + (i.price * i.quantity), 0)

  // WhatsApp
  const finalizarPedido = () => {
    if (cart.length === 0) return
    const pedidoId = `LS${Date.now()}`
    let mensagem = `🌙 *PEDIDO LUAR SONHAR* 🌙

`
    mensagem += `🆔 *ID do Pedido:* ${pedidoId}

`
    mensagem += `🛒 *Itens do Pedido:*
`
    cart.forEach(item => {
      mensagem += `• ${item.name}
  📏 Tamanho: ${item.selectedSize}
  🔢 Quantidade: ${item.quantity}
  💵 Valor: R$ ${(item.price * item.quantity).toFixed(2)}

`
    })
    mensagem += `💰 *Total: R$ ${cartTotal.toFixed(2)}*

`
    mensagem += `📝 Por favor, confirme seus dados:
• Nome completo:
• Endereço completo:
• Telefone para contato:

Obrigado por escolher a Luar Sonhar! 💖`

    const numeroWhatsApp = '5583996179193'
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
    window.open(urlWhatsApp, '_blank')
  }

  // Util
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen gradient-bg">

      {/* NEW: Modal de Imagem Fullscreen (Lupa) */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center p-4 animate-fade-in"
          onMouseDown={closeImageFullscreen}
          onClick={closeImageFullscreen}
          onTouchStart={closeImageFullscreen}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full flex justify-center items-center"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeImageFullscreen}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={fullscreenImage}
              alt="Visualização ampliada do produto"
              className="max-h-[90vh] w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}

      {/* Modal de Vídeo/Imagem Promocional */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4"
          onMouseDown={handleOverlayMouseDown}
        >
          <div
            ref={modalRef}
            onMouseDown={stopPropagation}
            className="relative bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-lg"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => minTimePassed && setShowVideoModal(false)}
              disabled={!minTimePassed}
              className="absolute top-2 right-2 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
            <img
              src={videoPlaceholder}
              alt="imagem Promocional Luar Sonhar"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={scrollToTop}>
              <img src={logoHorizontal} alt="Luar Sonhar" className="h-12 w-auto hover-scale" />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setSelectedCategory('todos')}
                className={`text-sm font-medium transition-colors ${selectedCategory === 'todos' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedCategory('pijamas')}
                className={`text-sm font-medium transition-colors ${selectedCategory === 'pijamas' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Pijamas
              </button>
              <button
                onClick={() => setSelectedCategory('conjuntos')}
                className={`text-sm font-medium transition-colors ${selectedCategory === 'conjuntos' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Conjuntos
              </button>
              <button
                onClick={() => setSelectedCategory('camisolas')}
                className={`text-sm font-medium transition-colors ${selectedCategory === 'camisolas' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                Camisolas
              </button>
            </nav>

            {/* Ações do Header */}
            <div className="flex items-center space-x-4">
              {/* Busca */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              {/* Instagram */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://www.instagram.com/luar_sonar_sume', '_blank')}
                className="hidden sm:flex"
              >
                <Instagram className="h-5 w-5" />
              </Button>

              {/* Carrinho */}
              <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 cart-badge">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </Badge>
                )}
              </Button>

              {/* Menu Mobile */}
              <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                {/* Busca Mobile */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Categorias Mobile */}
                <div className="flex flex-wrap gap-2">
                  {['todos', 'pijamas', 'conjuntos', 'camisolas'].map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsMenuOpen(false)
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Instagram Mobile */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/luar_sonhar_sume', '_blank')}
                  className="w-full justify-start"
                >
                  <Instagram className="h-5 w-5 mr-2" /> Instagram
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative text-white py-20 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            Bem-vindos ao Mundo dos Sonhos
          </h1>
          <p className="hero-subtitle text-lg md:text-xl mb-8 opacity-90 fade-in-up">
            Descubra nossa coleção de pijamas e roupas de dormir que transformam cada noite em um momento especial
          </p>
          <Button
            size="lg"
            className="btn-primary text-white px-8 py-3 fade-in-up"
            onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Catálogo
          </Button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada peça é cuidadosamente selecionada para proporcionar conforto e estilo únicos
            </p>
          </div>

          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="product-card">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg group cursor-zoom-in">
                    {/* Clique para abrir fullscreen */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover hover-scale"
                      onClick={() => openImageFullscreen(product.image)}
                    />

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleFavorite(product.id)}
                      aria-pressed={favorites.includes(product.id)}
                      title={favorites.includes(product.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                      className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm transition-colors ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-700'}`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>

                    <Badge className="absolute top-4 left-4 bg-primary">⭐ {product.rating}</Badge>

                    {/* Overlay do ícone de lupa no hover (não bloqueia cliques) */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{product.description}</CardDescription>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">R$ {product.price.toFixed(2)}</span>
                    <Badge variant="secondary">{product.stock} em estoque</Badge>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Tamanhos disponíveis:</p>
                    <div className="flex gap-2">
                      {product.sizes.map(size => (
                        <Badge
                          key={size}
                          variant={selectedSize[product.id] === size ? 'default' : 'outline'}
                          className="cursor-pointer hover:bg-primary hover:text-white"
                          onClick={() => setSelectedSize(prev => ({ ...prev, [product.id]: size }))}
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full btn-primary" onClick={() => addToCart(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhum produto encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </section>

      {/* Botão Flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 floating-animation"
          onClick={() => setShowWhatsappChat(!showWhatsappChat)}
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>

        {showWhatsappChat && (
          <div className="absolute bottom-20 right-0 w-72 bg-white rounded-lg shadow-xl p-4 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center mb-4">
              <img src={logoHorizontal} alt="Atendente Luar Sonhar" className="h-10 w-10 rounded-full mr-3" />
              <h4 className="font-semibold">Luar Sonhar Atendimento</h4>
            </div>
            <p className="text-sm text-gray-700 mb-4">Como posso lhe ajudar?</p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={() => {
                const numeroWhatsApp = '5583996179193'
                const mensagem = encodeURIComponent('Olá! Gostaria de atendimento da Luar Sonhar 🌙')
                window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank')
              }}
            >
              Iniciar Conversa
            </Button>
          </div>
        )}
      </div>

      {/* Modal do Carrinho */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Carrinho de Compras</h3>
                <Button variant="outline" size="sm" onClick={() => setIsCartOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground">Seu carrinho está vazio</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.cartId} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">Tamanho: {item.selectedSize}</p>
                        <p className="text-sm font-semibold">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-bold text-primary">R$ {cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full btn-primary" onClick={finalizarPedido}>
                  Finalizar Pedido via WhatsApp
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoHorizontal2} alt="Luar Sonhar" className="h-12 w-auto hover-scale" />

              <p className="text-sm opacity-90">
                Transformando noites em momentos especiais com conforto e estilo únicos.
              </p>
              <div className="mt-6 w-auto h-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open('https://www.instagram.com/luar_sonhar_sume', '_blank')}
                  className="text-shadow-white hover:bg-white/100 transition-colors duration-200"
                >
                  <Instagram className="h-30 w-30" /> Instagram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>📱 WhatsApp: (83) 9.9617-9193</p>
                <p>📍 Sumé, PB</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">© 2025 Luar Sonhar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
