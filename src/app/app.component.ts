import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Feature {
  icon: 'network' | 'tv' | 'quality' | 'devices';
  title: string;
  description: string;
}

interface Plan {
  name: string;
  period: string;
  badge?: string;
  featured?: boolean;
  benefits: string[];
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected menuOpen = false;
  protected scrolled = false;
  protected readonly whatsappNumber = '558194244706';
  protected readonly whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site do Cine Guerreiro e gostaria de conhecer os planos disponíveis.'
  );

  protected readonly features: Feature[] = [
    {
      icon: 'network',
      title: 'Tecnologia P2P',
      description: 'Distribuição inteligente para uma navegação mais fluida e estável.'
    },
    {
      icon: 'tv',
      title: 'IPTV integrado',
      description: 'Organize canais ao vivo, filmes e séries em uma experiência única.'
    },
    {
      icon: 'quality',
      title: 'Qualidade de imagem',
      description: 'Interface preparada para conteúdos em alta definição e até 4K.'
    },
    {
      icon: 'devices',
      title: 'Multidispositivos',
      description: 'Acesse pelo celular, computador, tablet ou dispositivo compatível.'
    }
  ];

  protected readonly plans: Plan[] = [
    {
      name: 'Mensal',
      period: '30 dias',
      benefits: ['Acesso multidispositivo', 'Suporte pelo WhatsApp', 'Atualizações contínuas']
    },
    {
      name: 'Trimestral',
      period: '90 dias',
      badge: 'Mais escolhido',
      featured: true,
      benefits: ['Todos os recursos do mensal', 'Maior praticidade', 'Atendimento prioritário']
    },
    {
      name: 'Anual',
      period: '12 meses',
      benefits: ['Experiência completa', 'Melhor planejamento', 'Suporte durante o período']
    }
  ];

  protected readonly faqItems: FaqItem[] = [
    {
      question: 'Em quais dispositivos posso acessar?',
      answer: 'A disponibilidade depende do aplicativo e do dispositivo utilizado. Entre em contato para confirmar a compatibilidade com celular, TV, computador ou tablet.',
      open: true
    },
    {
      question: 'Como recebo as informações de acesso?',
      answer: 'Após a confirmação do plano, o atendimento envia as orientações de configuração e os dados necessários diretamente pelo WhatsApp.',
      open: false
    },
    {
      question: 'Existe suporte para configuração?',
      answer: 'Sim. O atendimento orienta a instalação e os primeiros passos conforme o dispositivo informado pelo cliente.',
      open: false
    },
    {
      question: 'O catálogo é sempre o mesmo?',
      answer: 'A programação e a disponibilidade de conteúdos podem variar conforme o plano, o provedor e os direitos de distribuição aplicáveis.',
      open: false
    }
  ];

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  protected whatsappLink(context = ''): string {
    const message = context
      ? encodeURIComponent(`Olá! Vim pelo site do Cine Guerreiro e gostaria de saber mais sobre o plano ${context}.`)
      : this.whatsappMessage;

    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}
