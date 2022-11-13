import React from 'react';
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';
import Treatment from '../../../assets/images/treatment.png'

const Kid = () => {
    return (
        <div>
            <section className="dark:bg-gray-900 dark:text-gray-100 mt-16">
	<div className="container flex flex-col justify-center items-center mx-auto lg:flex-row">
		<div className="w-full lg:w-1/2 p-1 lg:p-16">
            <img src={Treatment} alt="" className='rounded-md' />
        </div>
		<div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12">
			<h2 className="text-3xl font-semibold leading-none">Exceptional Dental Care, on Your Terms</h2>
			<p className="mt-4 mb-8 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
			<PrimaryButton className="dark:bg-violet-400 dark:text-gray-900 ">Get started</PrimaryButton>
		</div>
	</div>
</section>
        </div>
    );
};

export default Kid;