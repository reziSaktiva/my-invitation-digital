'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Gift } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Button } from '../ui/button';
import ChessboardDivider from '../ChessboardDivider';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Account = {
    bank: string;
    accountNumber: string;
    accountHolder: string;
};

type PersonData = {
    name: string;
    accounts: Account[];
};

const giftData: Record<string, PersonData> = {
    groom: {
        name: 'Rezi',
        accounts: [
            {
                bank: 'BCA',
                accountNumber: '6765044611',
                accountHolder: 'Rezi Saktiva',
            },
        ],
    },
    bride: {
        name: 'Pracilia',
        accounts: [
            {
                bank: 'BCA',
                accountNumber: '4380415556',
                accountHolder: 'Pracilia Aldri Pertiwi',
            },
            {
                bank: 'BJB',
                accountNumber: '0135457531101',
                accountHolder: 'Pracilia Aldri Pertiwi',
            },
        ],
    },
};

const copyToClipboard = async (text: string): Promise<boolean> => {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy with navigator.clipboard:', err);
            return false;
        }
    } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            console.error('Failed to copy with execCommand:', err);
            document.body.removeChild(textArea);
            return false;
        }
    }
};

const BankSelector: React.FC<{ person: PersonData }> = ({ person }) => {
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(
        person.accounts.length === 1 ? person.accounts[0] : null
    );
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (selectedAccount) {
            copyToClipboard(selectedAccount.accountNumber).then((success) => {
                if (success) {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                }
            });
        }
    };

    return (
        <div className="w-full rounded-xl border border-white/70 bg-white/60 p-6 shadow-lg">
            <h3
                className="mb-6 text-3xl text-[#5C4033]"
            >
                {person.name}
            </h3>
            {person.accounts.length > 1 ? (
                <Select
                    onValueChange={(value) =>
                        setSelectedAccount(
                            person.accounts.find((acc) => acc.bank === value) ||
                            null
                        )
                    }
                >
                    <SelectTrigger className="w-full bg-white text-[#5C4033]">
                        <SelectValue placeholder="Pilih Bank" />
                    </SelectTrigger>
                    <SelectContent>
                        {person.accounts.map((account) => (
                            <SelectItem key={account.bank} value={account.bank}>
                                {account.bank}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ) : (
                <div className="w-full rounded-md border bg-white p-3 text-center text-[#5C4033]">
                    {person.accounts[0].bank}
                </div>
            )}

            <AnimatePresence>
                {selectedAccount && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="bg-white p-4 rounded-lg shadow-inner text-left overflow-hidden"
                    >
                        <p className="font-bold text-lg text-[#5C4033]">
                            {selectedAccount.accountNumber}
                        </p>
                        <p className="text-sm text-[#5C4033]/70">
                            a/n {selectedAccount.accountHolder}
                        </p>
                        <Button
                            onClick={handleCopy}
                            className="w-full mt-3 bg-[#D3738D] hover:bg-[#c5637c] text-white rounded-md transition-all duration-300"
                        >
                            <Copy size={16} className="mr-2" />
                            {copied ? 'Tersalin!' : 'Salin Nomor'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const addressData = {
    name: 'Kediaman Mempelai Wanita',
    address: 'Jl. Srimahi II No. 12, RT 05 RW 01, Kel. Ancol, Kec. Regol',
    city: 'Kota Bandung, Jawa Barat',
    phoneNumber: '+62-857-2245-6553',
    note: 'To ensure smooth delivery, please confirm with us before sending a package. Thank you for your understanding.'
};

const AddressCard = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const fullAddress = `${addressData.name}\n${addressData.address}\n${addressData.city}\n${addressData.phoneNumber}`;

    const handleCopy = () => {
        copyToClipboard(fullAddress).then((success) => {
            if (success) {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        });
    };

    return (
        <div className="w-full rounded-xl border border-white/70 bg-white/60 p-6 text-center shadow-lg">
            <Gift size={40} className="mx-auto text-[#D3738D]" />
            <h3
                className="mb-6 text-3xl text-[#5C4033]"
            >
                Send Gift
            </h3>
            <p className="text-[#5C4033]/80 mb-6 max-w-md mx-auto">For family and friends who wish to send a gift, it can be sent to the following address.</p>

            {!isVisible && (
                <Button
                    onClick={() => setIsVisible(true)}
                    className="bg-[#5C4033] hover:bg-[#4a3328] text-white rounded-md transition-all duration-300 px-8"
                >
                    Show Address
                </Button>
            )}

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="bg-white p-4 rounded-lg shadow-inner text-left overflow-hidden"
                    >
                        <p className="font-bold text-lg text-[#5C4033]">
                            {addressData.name}
                        </p>
                        <p className="text-sm text-[#5C4033]/80 whitespace-pre-line">
                            {`${addressData.address}\n${addressData.city}`}
                        </p>
                        <p className="text-sm text-[#5C4033]/80 mt-1">
                            {addressData.phoneNumber}
                        </p>
                        {addressData.note && <p className="text-xs text-[#5C4033]/60 mt-2 italic">{addressData.note}</p>}
                        <Button
                            onClick={handleCopy}
                            className="w-full mt-3 bg-[#D3738D] hover:bg-[#c5637c] text-white rounded-md transition-all duration-300"
                        >
                            <Copy size={16} className="mr-2" />
                            {copied ? 'Address Copied!' : 'Copy Address'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export function GiftSection() {
    return (
        <>
            <section className="bg-[#FBF6EE] py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <SectionTitle
                        firstText="Wedding"
                        secondText="Gift"
                        firstColor="text-[#5C4033]"
                        secondColor="text-[#D3738D]"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-4 max-w-2xl text-lg text-[#5C4033]/80"
                    >
                        Your presence is the greatest gift we could ever receive.
                        If you wish to give, please use the link below.
                    </motion.p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BankSelector person={giftData.groom} />
                        <BankSelector person={giftData.bride} />
                        <div className="md:col-span-2">
                            <AddressCard />
                        </div>
                    </div>
                </div>
            </section>
            <ChessboardDivider />
        </>
    );
}
