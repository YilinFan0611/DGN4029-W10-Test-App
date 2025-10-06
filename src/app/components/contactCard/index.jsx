export default function ContactCard() {
  return (
      <div className="sticky top-[80vh] z-40 w-full bg-[#F7F4ED] text-[#261606]/80">
          <div className="min-h-[20vh] py-10 md:py-12">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              {/* Records / Contact / Comments */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                {/* RECORDS */}
                <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-sans">RECORDS</h3>
                  <p className="text-xl md:text-2xl leading-tight uppercase tracking-tighter font-sans">KFONG@RECORDS.COM</p>
                </div>

                {/* CONTACT */}
                <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-sans">CONTACT</h3>
                  <p className="text-xl md:text-2xl leading-tight tracking-tighter font-sans uppercase">KFONG@CONTACT.COM</p>
                </div>

                {/* COMMENTS */}
                <div className="space-y-8">
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-sans lg:text-left">COMMENTS</h3>
                  <div className="flex lg:justify-end">
                    <textarea
                      placeholder="LEAVE YOUR COMMENTS HERE"
                      className="w-full lg:w-[680px] h-[140px] rounded-md border border-[#504234]
                                bg-[#E6E6E6]/60 text-[#261606]/80 placeholder:text-[#261606]/60
                                font-sans font-regular
                                outline-none focus:ring-2 focus:ring-black/20 px-4 py-3 text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <hr className="mt-10 md:mt-12 border-[#111111]" />

              {/* BOTTOM */}
              <div className="mt-6 md:mt-8 flex items-center justify-between font-HK text-[12px] md:text-[16px] text-[#261606]/80">
                <span>Website by Yilin Fan</span>
                <span>@2025 Khalil Fong - All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
  );
}