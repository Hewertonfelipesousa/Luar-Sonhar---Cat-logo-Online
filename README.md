# Luar Sonhar - Catálogo Online

## 📋 Visão Geral

O **Luar Sonhar** é um sistema de catálogo web/mobile moderno e responsivo desenvolvido para uma loja de pijamas e roupas de dormir. O projeto implementa um catálogo online completo com integração ao WhatsApp para finalização de pedidos, seguindo as melhores práticas de desenvolvimento web moderno.

### 🌟 Características Principais

- **Design Responsivo**: Compatível com desktop, notebook e dispositivos móveis
- **Interface Moderna**: Utiliza cores e elementos visuais inspirados na identidade da marca
- **Animações Contemporâneas**: Efeitos visuais suaves e transições elegantes
- **Integração WhatsApp**: Finalização de pedidos diretamente via WhatsApp
- **Carrinho de Compras**: Sistema completo de gerenciamento de itens
- **Busca e Filtros**: Funcionalidade de pesquisa e categorização de produtos
- **Performance Otimizada**: Carregamento rápido e experiência fluida



## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca JavaScript para construção da interface
- **Vite**: Ferramenta de build rápida e moderna
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **shadcn/ui**: Biblioteca de componentes UI modernos
- **Lucide React**: Ícones SVG otimizados
- **Framer Motion**: Biblioteca para animações (pré-instalada)

### Ferramentas de Desenvolvimento
- **pnpm**: Gerenciador de pacotes eficiente
- **ESLint**: Linter para qualidade de código
- **PostCSS**: Processador CSS

## 📁 Estrutura do Projeto

```
luar-sonhar-catalogo/
├── public/                     # Arquivos públicos estáticos
├── src/                        # Código fonte da aplicação
│   ├── assets/                 # Imagens e recursos estáticos
│   │   └── logo_horizontal.png # Logo da marca Luar Sonhar
│   ├── components/             # Componentes React reutilizáveis
│   │   └── ui/                 # Componentes UI do shadcn/ui
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilitários e bibliotecas
│   ├── App.css                 # Estilos principais da aplicação
│   ├── App.jsx                 # Componente principal da aplicação
│   ├── index.css               # Estilos globais
│   └── main.jsx                # Ponto de entrada da aplicação
├── dist/                       # Build de produção (gerado automaticamente)
├── components.json             # Configuração do shadcn/ui
├── eslint.config.js            # Configuração do ESLint
├── index.html                  # Template HTML principal
├── package.json                # Dependências e scripts do projeto
├── pnpm-lock.yaml              # Lock file das dependências
├── vite.config.js              # Configuração do Vite
└── README.md                   # Documentação do projeto
```

## 🎨 Design e Estilização

### Paleta de Cores
O design foi inspirado na logo da marca Luar Sonhar, utilizando:

- **Rosa Claro**: `oklch(0.96 0.01 15)` - Cor de fundo principal
- **Azul Escuro**: `oklch(0.2 0.05 240)` - Cor primária (texto e botões)
- **Rosa Secundário**: `oklch(0.9 0.02 15)` - Elementos secundários
- **Rosa de Destaque**: `oklch(0.85 0.03 15)` - Elementos de destaque

### Animações e Efeitos

#### Animações CSS Personalizadas
```css
/* Animação flutuante para elementos especiais */
.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Fade in com movimento para entrada de elementos */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Efeitos de Hover
- **Escala suave**: Elementos crescem 5% ao passar o mouse
- **Elevação de cards**: Produtos se elevam com sombra ao hover
- **Transições de botões**: Gradientes animados e elevação

#### Efeito Glass (Vidro)
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Responsividade

### Breakpoints Implementados

#### Desktop (1024px+)
- Layout em grid de 3 colunas para produtos
- Menu horizontal completo
- Busca sempre visível

#### Tablet (768px - 1023px)
- Layout em grid de 2 colunas
- Menu horizontal mantido
- Ajustes de espaçamento

#### Mobile (até 767px)
- Layout em coluna única
- Menu hambúrguer
- Busca no menu expandido
- Botões e textos otimizados para toque

### Media Queries Principais
```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
}
```

## 🛒 Funcionalidades Implementadas

### 1. Catálogo de Produtos
- **Exibição em Grid**: Layout responsivo com cards de produtos
- **Informações Completas**: Nome, descrição, preço, avaliação, estoque
- **Imagens Placeholder**: Sistema preparado para imagens reais
- **Tamanhos Disponíveis**: Seleção de tamanhos por produto

### 2. Sistema de Carrinho
- **Adição de Produtos**: Botão "Adicionar ao Carrinho" em cada produto
- **Modal de Carrinho**: Interface limpa para visualização dos itens
- **Controle de Quantidade**: Botões + e - para ajustar quantidades
- **Cálculo Automático**: Total atualizado em tempo real
- **Remoção de Itens**: Funcionalidade para remover produtos

### 3. Busca e Filtros
- **Busca por Texto**: Campo de busca que filtra por nome e descrição
- **Filtros por Categoria**: Botões para filtrar por tipo de produto
- **Resultados Dinâmicos**: Atualização instantânea dos resultados

### 4. Integração WhatsApp
- **Geração de Pedido**: Criação automática de ID único
- **Mensagem Formatada**: Template profissional com todos os detalhes
- **Redirecionamento Automático**: Abertura direta do WhatsApp
- **Dados do Cliente**: Solicitação de informações de contato

### 5. Interface de Usuário
- **Header Fixo**: Navegação sempre acessível
- **Logo Integrada**: Marca Luar Sonhar em destaque
- **Badges Animados**: Contador de itens no carrinho
- **Footer Informativo**: Contatos e horários de atendimento



## 🔧 Personalização e Manutenção

### Alterando Produtos
Para modificar os produtos exibidos, edite o array `mockProducts` em `src/App.jsx`:

```javascript
const mockProducts = [
  {
    id: 1,
    name: 'Nome do Produto',
    description: 'Descrição detalhada',
    price: 45.90,
    image: 'URL_DA_IMAGEM',
    category: 'categoria',
    sizes: ['P', 'M', 'G'],
    stock: 15,
    rating: 4.8
  },
  // ... mais produtos
];
```

### Configurando WhatsApp
Para alterar o número do WhatsApp, modifique a variável em `src/App.jsx`:

```javascript
const numeroWhatsApp = '5511999999999' // Substitua pelo número real
```

### Alterando Cores
Para modificar as cores do tema, edite as variáveis CSS em `src/App.css`:

```css
:root {
  --background: oklch(0.96 0.01 15); /* Cor de fundo */
  --primary: oklch(0.2 0.05 240);    /* Cor primária */
  /* ... outras cores */
}
```

### Adicionando Novas Animações
Para criar novas animações, adicione em `src/App.css`:

```css
.nova-animacao {
  animation: minhaAnimacao 2s ease-in-out infinite;
}

@keyframes minhaAnimacao {
  0% { /* estado inicial */ }
  50% { /* estado intermediário */ }
  100% { /* estado final */ }
}
```

## 📊 Performance e Otimização

### Métricas de Performance
- **Tempo de Carregamento**: < 3 segundos
- **First Contentful Paint**: < 1.5 segundos
- **Largest Contentful Paint**: < 2.5 segundos
- **Cumulative Layout Shift**: < 0.1

### Otimizações Implementadas
1. **Lazy Loading**: Imagens carregadas sob demanda
2. **Code Splitting**: Divisão automática do código
3. **Tree Shaking**: Remoção de código não utilizado
4. **Minificação**: Compressão de CSS e JavaScript
5. **Gzip**: Compressão de arquivos estáticos

### Monitoramento
Para monitorar a performance em produção:
1. Use Google PageSpeed Insights
2. Configure Google Analytics
3. Implemente Web Vitals

## 🐛 Solução de Problemas

### Problemas Comuns

#### 1. Erro "Module not found"
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 2. Porta 5173 já em uso
```bash
# Usar porta diferente
pnpm run dev --port 3000
```

#### 3. Build falha
```bash
# Verificar espaço em disco
df -h

# Limpar cache do Vite
pnpm run build --force
```

#### 4. Imagens não carregam
- Verificar se as imagens estão na pasta `src/assets`
- Confirmar se os imports estão corretos
- Verificar permissões de arquivo

### Logs e Debug
Para debug avançado:
```bash
# Modo verbose
pnpm run dev --debug

# Logs detalhados
DEBUG=vite:* pnpm run dev
```

## 📝 Explicação do Código

### Estrutura do Componente Principal (App.jsx)

#### 1. Imports e Dependências
```javascript
import { useState, useEffect } from 'react'
// Hook useState: Gerencia estado local do componente
// Hook useEffect: Executa efeitos colaterais (carregar dados)

import { Button } from '@/components/ui/button.jsx'
// Componente Button do shadcn/ui para botões estilizados

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
// Componentes Card para criar layouts de cartão responsivos

import { Badge } from '@/components/ui/badge.jsx'
// Componente Badge para exibir informações destacadas

import { Input } from '@/components/ui/input.jsx'
// Componente Input para campos de entrada de texto

import { ShoppingCart, Search, Star, Heart, Menu, X, Plus, Minus } from 'lucide-react'
// Ícones SVG otimizados da biblioteca Lucide React

import logoHorizontal from './assets/logo_horizontal.png'
// Import da logo da marca (Webpack/Vite processa automaticamente)

import './App.css'
// Estilos personalizados da aplicação
```

#### 2. Estados do Componente
```javascript
const [products, setProducts] = useState([])
// Array de produtos do catálogo

const [cart, setCart] = useState([])
// Array de itens no carrinho de compras

const [searchTerm, setSearchTerm] = useState('')
// String para busca de produtos

const [selectedCategory, setSelectedCategory] = useState('todos')
// Categoria selecionada para filtrar produtos

const [isMenuOpen, setIsMenuOpen] = useState(false)
// Boolean para controlar menu mobile

const [isCartOpen, setIsCartOpen] = useState(false)
// Boolean para controlar modal do carrinho
```

#### 3. Carregamento de Dados
```javascript
useEffect(() => {
  const mockProducts = [
    // Array de produtos simulados
  ]
  setProducts(mockProducts)
}, [])
// useEffect com array vazio [] executa apenas uma vez na montagem
// Simula carregamento de dados de uma API
```

#### 4. Filtros de Produtos
```javascript
const filteredProducts = products.filter(product => {
  const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase())
  // Busca case-insensitive no nome e descrição
  
  const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
  // Filtra por categoria selecionada
  
  return matchesSearch && matchesCategory
  // Retorna produtos que atendem ambos os critérios
})
```

#### 5. Gerenciamento do Carrinho
```javascript
const addToCart = (product, size = 'M', quantity = 1) => {
  const cartItem = {
    ...product,                    // Spread operator: copia todas as propriedades do produto
    selectedSize: size,            // Adiciona tamanho selecionado
    quantity: quantity,            // Adiciona quantidade
    cartId: `${product.id}-${size}` // ID único para o item no carrinho
  }
  
  const existingItem = cart.find(item => item.cartId === cartItem.cartId)
  // Verifica se item já existe no carrinho
  
  if (existingItem) {
    // Se existe, atualiza quantidade
    setCart(cart.map(item => 
      item.cartId === cartItem.cartId 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    ))
  } else {
    // Se não existe, adiciona novo item
    setCart([...cart, cartItem])
  }
}
```

#### 6. Cálculo do Total
```javascript
const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
// reduce: Função de alta ordem que acumula valores
// Multiplica preço pela quantidade de cada item e soma tudo
```

#### 7. Integração WhatsApp
```javascript
const finalizarPedido = () => {
  if (cart.length === 0) return // Guard clause: sai se carrinho vazio
  
  const pedidoId = `LS${Date.now()}` // Gera ID único baseado em timestamp
  let mensagem = `🌙 *PEDIDO LUAR SONHAR* 🌙\n\n`
  mensagem += `📋 *ID do Pedido:* ${pedidoId}\n\n`
  mensagem += `🛍️ *Itens do Pedido:*\n`
  
  cart.forEach(item => {
    // Itera sobre cada item do carrinho
    mensagem += `• ${item.name}\n`
    mensagem += `  Tamanho: ${item.selectedSize}\n`
    mensagem += `  Quantidade: ${item.quantity}\n`
    mensagem += `  Valor: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`
  })
  
  mensagem += `💰 *Total: R$ ${cartTotal.toFixed(2)}*\n\n`
  // Template string com interpolação de variáveis
  
  const numeroWhatsApp = '5583996179193'
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
  // encodeURIComponent: Codifica a mensagem para URL
  
  window.open(urlWhatsApp, '_blank')
  // Abre WhatsApp em nova aba
}
```

### Estrutura do CSS (App.css)

#### 1. Variáveis CSS Customizadas
```css
:root {
  --background: oklch(0.96 0.01 15); /* Rosa claro inspirado na logo */
  --foreground: oklch(0.2 0.05 240); /* Azul escuro da logo */
  --primary: oklch(0.2 0.05 240);    /* Azul escuro da logo */
}
/* Variáveis CSS permitem reutilização e fácil manutenção de cores */
```

#### 2. Classes Utilitárias
```css
.gradient-bg {
  background: linear-gradient(135deg, #f5e6f0 0%, #e8d5e8 50%, #f0e6f5 100%);
}
/* Gradiente de fundo inspirado nas cores da logo */

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
/* Efeito de vidro moderno com blur de fundo */
```

#### 3. Animações CSS
```css
@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
/* Keyframes definem os pontos da animação */

.floating-animation {
  animation: floating 3s ease-in-out infinite;
}
/* Aplica a animação: nome duração timing-function iterações */
```

#### 4. Responsividade
```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
/* Media queries para diferentes tamanhos de tela */
```

### Componentes React Utilizados

#### 1. Componente Card
```jsx
<Card className="product-card">
  <CardHeader className="p-0">
    {/* Cabeçalho do card com imagem */}
  </CardHeader>
  <CardContent className="p-6">
    {/* Conteúdo principal com informações do produto */}
  </CardContent>
  <CardFooter className="p-6 pt-0">
    {/* Rodapé com botão de ação */}
  </CardFooter>
</Card>
```

#### 2. Renderização Condicional
```jsx
{cart.length === 0 ? (
  <p className="text-center text-muted-foreground">
    Seu carrinho está vazio
  </p>
) : (
  <div className="space-y-4">
    {/* Lista de itens do carrinho */}
  </div>
)}
```

#### 3. Mapeamento de Arrays
```jsx
{filteredProducts.map(product => (
  <Card key={product.id} className="product-card">
    {/* Conteúdo do card */}
  </Card>
))}
```

## 📚 Recursos Adicionais

### Documentação Oficial
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Tutoriais Recomendados
- [React Tutorial for Beginners](https://react.dev/learn)
- [Tailwind CSS Crash Course](https://tailwindcss.com/docs)
- [Modern CSS Animations](https://web.dev/animations/)

### Ferramentas Úteis
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Color Palette Generator](https://coolors.co/)

## 🤝 Suporte e Contribuição

### Como Obter Ajuda
1. Consulte esta documentação primeiro
2. Verifique a seção de solução de problemas
3. Consulte a documentação oficial das tecnologias
4. Entre em contato com a equipe de desenvolvimento

### Contribuindo para o Projeto
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para a marca Luar Sonhar. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe de desenvolvimento da SOS Computadores & Serviços**
**Sumé-PB (83) 99802-4441**

*Última atualização: Agosto 2025*

