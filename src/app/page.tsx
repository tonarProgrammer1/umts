import { redirect } from 'next/navigation';



export default function HomePage() {
	// if () {
	//   redirect('/dashboard/profile'); // Если авторизован, переходим в панель управления
	// } else {
	  redirect('/auth'); // Если не авторизован, переходим на страницу входа
	// }
  }
