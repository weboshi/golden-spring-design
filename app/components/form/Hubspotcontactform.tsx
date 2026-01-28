'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

const PORTAL_ID = '245000324';
const FORM_ID = '5ee85f8e-fdd2-4b9c-95f0-413d9fd91b59';

const CUSTOMER_TYPES = [
    'Builder / Developer',
    'Contractor',
    'Designer / Architect',
    'Distributor / Showroom',
    'Homeowner',
    'Other',
];

const INTERESTS = [
    'Shower Doors',
    'Custom Shower Enclosures',
    'Hardware / Finishes',
    'Project Pricing',
    'Distribution / Partnership',
];

const TIMELINES = [
    'Immediate / Within 1 month',
    '1-3 months',
    '3-6 months',
    'Just exploring',
];

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    customerType: string;
    interests: string[];
    timeline: string;
}

const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    customerType: '',
    interests: [],
    timeline: '',
};

export default function HubSpotContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleInterestChange = (interest: string) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest],
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const payload = {
            fields: [
                { name: 'firstname', value: formData.firstName },
                { name: 'lastname', value: formData.lastName },
                { name: 'email', value: formData.email },
                { name: 'phone', value: formData.phone },
                { name: 'company', value: formData.company },
                { name: 'customer_type', value: formData.customerType },
                { name: 'customer_interests', value: formData.interests.join('; ') },
                { name: 'project_timeline', value: formData.timeline },
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        try {
            const res = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );

            if (res.ok) {
                setStatus('success');
                setFormData(initialFormData);
            } else {
                const data = await res.json();
                setErrorMessage(data.message || 'Submission failed. Please try again.');
                setStatus('error');
            }
        } catch {
            setErrorMessage('Network error. Please check your connection and try again.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="rounded-lg bg-green-50 p-8 text-center">
                <h3 className="text-xl font-semibold text-green-800">Thank you!</h3>
                <p className="mt-2 text-green-700">We'll follow up shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-green-600 underline hover:text-green-800"
                >
                    Submit another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg">
            {/* Name Row */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 text-black px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 text-black px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {/* Company */}
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md text-black border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {/* Customer Type */}
            <div>
                <label htmlFor="customerType" className="block text-sm font-medium text-gray-700">
                    Customer Type <span className="text-red-500">*</span>
                </label>
                <select
                    id="customerType"
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Select one...</option>
                    {CUSTOMER_TYPES.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Interests (Multi-select) */}
            <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                    What are you interested in?
                </legend>
                <div className="mt-2 space-y-2">
                    {INTERESTS.map((interest) => (
                        <label key={interest} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.interests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                                className="h-4 w-4 rounded text-black border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            {/* Project Timeline */}
            <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                    Project Timeline
                </label>
                <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Select one...</option>
                    {TIMELINES.map((timeline) => (
                        <option key={timeline} value={timeline}>
                            {timeline}
                        </option>
                    ))}
                </select>
            </div>

            {/* Error Message */}
            {status === 'error' && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-md bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}