import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CompanyService } from '../../feature/company/company.service';

interface Service {
	icon: string;
	title: string;
	description: string;
}

interface WhyItem {
	icon: string;
	title: string;
	description: string;
}

interface ProcessStep {
	number: string;
	icon: string;
	title: string;
	description: string;
}

@Component({
	imports: [],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly company = inject(CompanyService).company;

	protected readonly services: Service[] = [
		{
			icon: 'oil_barrel',
			title: 'Заміна масла та ТО',
			description:
				'Планове технічне обслуговування двигуна, заміна мастил та фільтрів. Тільки оригінальні матеріали.',
		},
		{
			icon: 'settings',
			title: "Комп'ютерна діагностика",
			description:
				'Повна діагностика всіх електронних систем автомобіля. Виявляємо несправності ще до поломки.',
		},
		{
			icon: 'tire_repair',
			title: 'Шиномонтаж',
			description:
				'Монтаж, балансування та зберігання шин. Сезонна заміна коліс на будь-яких авто.',
		},
		{
			icon: 'warning',
			title: 'Гальмівна система',
			description:
				'Діагностика та ремонт гальм, заміна колодок і дисків. Ваша безпека — наш пріоритет.',
		},
		{
			icon: 'directions_car',
			title: 'Кузовні роботи',
			description:
				'Рихтування, фарбування та антикорозійна обробка. Повертаємо автомобілю первісний вигляд.',
		},
		{
			icon: 'electrical_services',
			title: 'Електрика авто',
			description:
				'Ремонт і обслуговування електричної системи: проводка, акумулятор, генератор, стартер.',
		},
		{
			icon: 'ac_unit',
			title: 'Кондиціонер',
			description:
				'Заправка, діагностика та ремонт автомобільних кондиціонерів. Комфорт у будь-яку пору року.',
		},
		{
			icon: 'build',
			title: 'Підвіска та кермо',
			description:
				'Діагностика та ремонт ходової частини, заміна амортизаторів, тяг і рульових наконечників.',
		},
	];

	protected readonly whyItems: WhyItem[] = [
		{
			icon: 'verified',
			title: '10+ років досвіду',
			description: 'Наша команда — це сертифіковані майстри з великим практичним досвідом.',
		},
		{
			icon: 'workspace_premium',
			title: 'Гарантія на роботи',
			description: 'Надаємо офіційну гарантію на всі виконані роботи та встановлені деталі.',
		},
		{
			icon: 'payments',
			title: 'Прозорі ціни',
			description: 'Ніяких прихованих доплат. Вартість погоджується до початку робіт.',
		},
		{
			icon: 'schedule',
			title: 'Швидко та чесно',
			description: 'Виконуємо роботи в узгоджені терміни. Ваш час — найцінніший ресурс.',
		},
	];

	protected readonly processSteps: ProcessStep[] = [
		{
			number: '01',
			icon: 'phone_in_talk',
			title: 'Запис на сервіс',
			description: 'Телефонуйте або заповнюйте форму онлайн. Оберіть зручний час.',
		},
		{
			number: '02',
			icon: 'search',
			title: 'Діагностика',
			description: 'Майстер проводить огляд та діагностику. Погоджуємо перелік та вартість робіт.',
		},
		{
			number: '03',
			icon: 'build_circle',
			title: 'Ремонт',
			description:
				'Виконуємо роботи якісно та у строк. Використовуємо тільки перевірені запчастини.',
		},
		{
			number: '04',
			icon: 'check_circle',
			title: 'Видача авто',
			description: 'Перевіряємо якість виконаних робіт разом із вами. Видаємо гарантійний талон.',
		},
	];
}
