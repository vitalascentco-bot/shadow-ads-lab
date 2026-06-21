import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, X, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'whatsapp' | 'email'>('form');
  const [formStep, setFormStep] = useState<'email' | 'otp' | 'message' | 'success'>('email');
  
  const [email, setEmail] = useState('');
  const [otpGenerated, setOtpGenerated] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError('');
    
    // Generate a 4 digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setOtpGenerated(otp);

    try {
      // NOTE: Client needs to set up these IDs in EmailJS
      // Service ID, Template ID, Public Key
      await emailjs.send(
        'service_tsiulzm', 
        'template_s4tvbgs', 
        {
          to_email: email,
          otp_code: otp,
        },
        'yc1kAHXJM-nlkLVku'
      );
      
      setFormStep('otp');
    } catch (err) {
      console.error(err);
      setError('Failed to send verification code. Please check your EmailJS credentials in ContactModal.tsx.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput === otpGenerated) {
      setFormStep('message');
      setError('');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_tsiulzm', 
        'template_on59r8w', 
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'yc1kAHXJM-nlkLVku'
      );
      
      setFormStep('success');
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep-charcoal/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-pure-white rounded-3xl overflow-hidden border border-deep-charcoal shadow-2xl reveal-up active">
        {/* Header */}
        <div className="p-6 border-b border-deep-charcoal flex justify-between items-center bg-surface-container-low">
          <h2 className="font-metric-lg text-2xl font-bold text-deep-charcoal">Let's Talk</h2>
          <button onClick={onClose} className="p-2 hover:bg-deep-charcoal/10 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6 text-deep-charcoal" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-deep-charcoal bg-pure-white">
          <button 
            onClick={() => setActiveTab('form')}
            className={`cursor-pointer flex-1 py-4 font-label-mono text-[13px] font-bold uppercase transition-colors ${activeTab === 'form' ? 'bg-coral-orange text-pure-white' : 'text-deep-charcoal/60 hover:bg-surface-container-low hover:text-deep-charcoal'}`}
          >
            Direct Message
          </button>
          <button 
            onClick={() => setActiveTab('whatsapp')}
            className={`cursor-pointer flex-1 py-4 font-label-mono text-[13px] font-bold uppercase transition-colors border-l border-deep-charcoal ${activeTab === 'whatsapp' ? 'bg-coral-orange text-pure-white' : 'text-deep-charcoal/60 hover:bg-surface-container-low hover:text-deep-charcoal'}`}
          >
            WhatsApp
          </button>
          <button 
            onClick={() => setActiveTab('email')}
            className={`cursor-pointer flex-1 py-4 font-label-mono text-[13px] font-bold uppercase transition-colors border-l border-deep-charcoal ${activeTab === 'email' ? 'bg-coral-orange text-pure-white' : 'text-deep-charcoal/60 hover:bg-surface-container-low hover:text-deep-charcoal'}`}
          >
            Email
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === 'whatsapp' && (
            <div className="text-center py-8">
              <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
              <h3 className="font-headline-sub text-[20px] font-bold text-deep-charcoal mb-4">Chat with us on WhatsApp</h3>
              <p className="font-body-main text-[16px] text-deep-charcoal/80 mb-8">Get immediate answers from our team.</p>
              <a href="https://wa.me/96879581789" target="_blank" rel="noopener noreferrer" className="inline-block w-full bg-[#25D366] text-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-[#1DA851] transition-colors">
                Open WhatsApp
              </a>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="text-center py-8">
              <Mail className="w-16 h-16 text-coral-orange mx-auto mb-6" />
              <h3 className="font-headline-sub text-[20px] font-bold text-deep-charcoal mb-4">Send us an Email</h3>
              <p className="font-body-main text-[16px] text-deep-charcoal/80 mb-8">We usually reply within 24 hours.</p>
              <a href="mailto:Shadowadslab@gmail.com" className="inline-block w-full bg-deep-charcoal text-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-coral-orange transition-colors">
                Open Mail App
              </a>
            </div>
          )}

          {activeTab === 'form' && (
            <div>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 font-body-main text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {formStep === 'email' && (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  <div>
                    <label className="block font-label-mono text-[12px] font-bold uppercase text-deep-charcoal/60 mb-2">Your Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-low border border-deep-charcoal/20 rounded-xl px-4 py-3 font-body-main text-deep-charcoal focus:outline-none focus:border-coral-orange focus:ring-1 focus:ring-coral-orange transition-all"
                      placeholder="Enter your email to verify"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="cursor-pointer w-full bg-coral-orange text-pure-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-deep-charcoal transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {loading ? 'Sending Code...' : 'Send Verification Code'}
                  </button>
                </form>
              )}

              {formStep === 'otp' && (
                <form onSubmit={handleVerifyOtp} className="space-y-6 text-center">
                  <p className="font-body-main text-[15px] text-deep-charcoal/80">
                    We sent a 4-digit code to <strong>{email}</strong>.
                  </p>
                  <div>
                    <input 
                      type="text" 
                      required
                      maxLength={4}
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                      className="w-full text-center tracking-[1em] text-2xl bg-surface-container-low border border-deep-charcoal/20 rounded-xl px-4 py-4 font-metric-lg font-bold text-deep-charcoal focus:outline-none focus:border-coral-orange focus:ring-1 focus:ring-coral-orange transition-all"
                      placeholder="0000"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="cursor-pointer w-full bg-deep-charcoal text-pure-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-coral-orange transition-colors"
                  >
                    Verify Code
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setFormStep('email'); setOtpInput(''); }}
                    className="cursor-pointer text-deep-charcoal/60 font-body-main text-sm hover:text-coral-orange underline"
                  >
                    Use a different email
                  </button>
                </form>
              )}

              {formStep === 'message' && (
                <form onSubmit={handleSendMessage} className="space-y-5">
                  <div className="flex items-center gap-2 mb-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-body-main">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Email verified: {email}</span>
                  </div>
                  
                  <div>
                    <label className="block font-label-mono text-[12px] font-bold uppercase text-deep-charcoal/60 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container-low border border-deep-charcoal/20 rounded-xl px-4 py-3 font-body-main text-deep-charcoal focus:outline-none focus:border-coral-orange transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-label-mono text-[12px] font-bold uppercase text-deep-charcoal/60 mb-2">Message</label>
                    <textarea 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-surface-container-low border border-deep-charcoal/20 rounded-xl px-4 py-3 font-body-main text-deep-charcoal focus:outline-none focus:border-coral-orange transition-all resize-none"
                      placeholder="Tell us about your brand and goals..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="cursor-pointer w-full bg-coral-orange text-pure-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-deep-charcoal transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {loading ? 'Sending...' : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              {formStep === 'success' && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-metric-lg text-3xl font-bold text-deep-charcoal mb-4">Message Sent!</h3>
                  <p className="font-body-main text-[16px] text-deep-charcoal/80 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={onClose}
                    className="cursor-pointer bg-deep-charcoal text-pure-white px-8 py-4 rounded-full font-label-mono text-[15px] font-bold uppercase hover:bg-coral-orange transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
