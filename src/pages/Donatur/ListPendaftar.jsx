import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

//nyambung ke component beasiswa card
function ListPendaftar(){
    return(
        <div className='bg-indigo-100 h-fill w-full'>
            <Navbar/>
            <div className="flex justify-center gap-3 mb-5 mt-5">
                <p className='font-semibold text-2xl'>Pendaftar Beasiswa</p>
            </div>
            {/* code */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-16">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nama Pendaftar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Universitas
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Provinsi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Semester Kuliah
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Farhan
                            </th>
                            <td class="px-6 py-4">
                                Uiversitas Negeri Jakarta
                            </td>
                            <td class="px-6 py-4">
                                Jakarta
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Izzah
                            </th>
                            <td class="px-6 py-4">
                                Universitas Brawijaya
                            </td>
                            <td class="px-6 py-4">
                               Malang
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Richard
                            </th>
                            <td class="px-6 py-4">
                                Universitas Tangerang
                            </td>
                            <td class="px-6 py-4">
                                Tangerang
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Tazkia
                            </th>
                            <td class="px-6 py-4">
                                Universitas Brawijaya
                            </td>
                            <td class="px-6 py-4">
                               Malang
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Nanda
                            </th>
                            <td class="px-6 py-4">
                                Universitas Brawijaya
                            </td>
                            <td class="px-6 py-4">
                               Malang
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Aisyah
                            </th>
                            <td class="px-6 py-4">
                                Universitas Brawijaya
                            </td>
                            <td class="px-6 py-4">
                               Malang
                            </td>
                            <td class="px-6 py-4">
                                6
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div className="flex gap-8">
                                    <a href="#" class="font-medium text-red-600 dark:text-red-400 hover:underline">Tolak</a>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terima</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default ListPendaftar;