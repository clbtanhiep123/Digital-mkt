import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, Sparkles, Truck, ShieldCheck } from 'lucide-react';
import contentData from '../data/contentData.json';
import { ProductItem } from './ProductShowcaseSection';

interface OrderItem {
  product: ProductItem;
  quantity: number;
  secretMessage?: string;
  scentNote?: string;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddProduct: (product: ProductItem) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onAddProduct,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customSecretNote, setCustomSecretNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'momo' | 'vnpay'>('cod');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 400000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || items.length === 0) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#23211E]/30 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Panel in White & Pastel Yellow */}
      <div className="relative w-full max-w-lg bg-white border-l border-[rgba(218,185,114,0.35)] h-full flex flex-col justify-between z-10 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-[rgba(218,185,114,0.25)] flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B38528]" />
            <h3 className="text-lg font-bold text-[#23211E] font-display">
              Đơn Hàng Nến Thơm TĨNH
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#FAF8F5] hover:bg-[#FFF4D4] text-[#78716C] hover:text-[#23211E] flex items-center justify-center transition-colors cursor-pointer border border-[rgba(218,185,114,0.25)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 flex-1">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FFF9E6] border-2 border-[#ECC850] flex items-center justify-center mx-auto text-[#B38528] animate-bounce shadow-pastel-glow">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#23211E] font-display">
                Đặt Hàng Thành Công!
              </h4>
              <p className="text-sm text-[#78716C] max-w-xs mx-auto">
                Cảm ơn bạn <span className="text-[#23211E] font-bold">{customerName}</span>. Nhân viên TĨNH sẽ gọi xác nhận đơn hàng qua SĐT <span className="font-mono text-[#B38528] font-bold">{customerPhone}</span> trong vòng 15 phút.
              </p>
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[rgba(218,185,114,0.3)] text-left text-xs font-mono space-y-1.5 mt-4">
                <div className="text-[#78716C]">Mã đơn: <span className="text-[#B38528] font-bold">#TINH-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                <div className="text-[#78716C]">Tổng thanh toán: <span className="text-[#23211E] font-bold">{total.toLocaleString('vi-VN')} VNĐ</span></div>
                <div className="text-[#78716C]">Phương thức: <span className="text-[#B38528] font-bold uppercase">{paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng (COD)' : paymentMethod === 'momo' ? 'Ví MoMo' : 'VNPAY QR'}</span></div>
                <div className="text-[#78716C]">Địa chỉ giao: <span className="text-[#23211E]">{customerAddress || 'Giao tại TP.HCM'}</span></div>
                {customSecretNote && (
                  <div className="text-[#78716C]">Thông điệp ẩn: <span className="text-[#B38528] font-bold">"{customSecretNote}"</span></div>
                )}
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-[#ECC850] hover:bg-[#F4D36C] text-[#23211E] font-bold text-xs uppercase tracking-wider rounded-xl shadow-pastel-btn cursor-pointer border border-[#D4A346]/40"
              >
                Tiếp Tục Xem Thêm
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C] font-semibold">
                  <span>GIỎ HÀNG CỦA BẠN ({items.length})</span>
                  <span>ĐƠN GIÁ</span>
                </div>

                {items.length === 0 ? (
                  <div className="p-8 text-center rounded-xl bg-[#FAF8F5] border border-[rgba(218,185,114,0.25)] space-y-3">
                    <p className="text-sm text-[#78716C]">Giỏ hàng đang trống.</p>
                    <p className="text-xs text-[#B38528] font-medium">Hãy chọn sản phẩm từ danh mục bên dưới để thêm nhanh:</p>
                    <div className="flex flex-col gap-2 pt-2">
                      {contentData.products.items.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => onAddProduct(prod as ProductItem)}
                          className="px-3 py-2 bg-white hover:bg-[#FFF9E6] border border-[rgba(218,185,114,0.3)] rounded-lg text-xs font-medium text-[#23211E] flex items-center justify-between cursor-pointer shadow-xs"
                        >
                          <span>+ {prod.name} ({prod.weight})</span>
                          <span className="font-mono text-[#B38528] font-bold">{prod.priceFormatted}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[rgba(218,185,114,0.3)] flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="space-y-0.5 flex-1">
                        <div className="text-sm font-bold text-[#23211E] font-display">
                          {item.product.name}
                        </div>
                        <div className="text-[11px] font-mono text-[#B38528] font-semibold">
                          {item.product.weight}
                        </div>
                        <div className="text-[11px] font-mono text-[#78716C]">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-[rgba(218,185,114,0.3)] shadow-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-[#78716C] hover:text-[#23211E] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-[#23211E]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#78716C] hover:text-[#23211E] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Secret message customization box */}
              {items.length > 0 && (
                <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#ECC850] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#927129] flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#ECC850]" />
                      KHẮC THÔNG ĐIỆP BÍ MẬT DƯỚI SÁP
                    </span>
                    <span className="text-[10px] font-mono text-[#B38528] font-bold bg-[#FFF4D4] px-2 py-0.5 rounded">MIỄN PHÍ</span>
                  </div>
                  <input
                    type="text"
                    maxLength={35}
                    value={customSecretNote}
                    onChange={(e) => setCustomSecretNote(e.target.value)}
                    placeholder="Ví dụ: Bình yên trong từng hơi thở (tối đa 35 ký tự)..."
                    className="w-full bg-white border border-[rgba(218,185,114,0.35)] rounded-lg px-3 py-2 text-xs text-[#23211E] focus:border-[#ECC850] focus:outline-none font-mono"
                  />
                  <span className="text-[10px] text-[#78716C] block">
                    Lời chúc sẽ dần hiện ra sau khi nến cháy 15 phút.
                  </span>
                </div>
              )}

              {/* Delivery Details Form */}
              {items.length > 0 && (
                <form id="order-form" onSubmit={handleSubmitOrder} className="space-y-3">
                  <div className="text-xs font-mono text-[#78716C] font-semibold">
                    THÔNG TIN NHẬN HÀNG (COD TOÀN QUỐC)
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Họ và tên người nhận *"
                      className="w-full bg-[#FAF8F5] border border-[rgba(218,185,114,0.35)] rounded-lg px-3 py-2 text-xs text-[#23211E] focus:border-[#ECC850] focus:outline-none font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Số điện thoại *"
                      className="w-full bg-[#FAF8F5] border border-[rgba(218,185,114,0.35)] rounded-lg px-3 py-2 text-xs text-[#23211E] focus:border-[#ECC850] focus:outline-none font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Địa chỉ giao hàng (Số nhà, đường, quận/huyện)..."
                      className="w-full bg-[#FAF8F5] border border-[rgba(218,185,114,0.35)] rounded-lg px-3 py-2 text-xs text-[#23211E] focus:border-[#ECC850] focus:outline-none font-mono"
                    />
                  </div>

                  {/* Payment Methods */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[11px] font-mono text-[#78716C] block">
                      PHƯƠNG THỨC THANH TOÁN LIÊN KẾT:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cod')}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'cod'
                            ? 'bg-[#FFF9E6] border-[#ECC850] shadow-xs'
                            : 'bg-white border-[rgba(218,185,114,0.3)] hover:border-[#ECC850]'
                        }`}
                      >
                        <span className="text-[11px] font-mono font-bold text-[#23211E]">COD</span>
                        <span className="text-[9px] text-[#78716C]">Tiền mặt</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('momo')}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'momo'
                            ? 'bg-[#FFF9E6] border-[#ECC850] shadow-xs'
                            : 'bg-white border-[rgba(218,185,114,0.3)] hover:border-[#ECC850]'
                        }`}
                      >
                        <img src="./assets/partner_momo.png" alt="Ví MoMo" className="h-4 object-contain" />
                        <span className="text-[9px] font-medium text-[#23211E]">Ví MoMo</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('vnpay')}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'vnpay'
                            ? 'bg-[#FFF9E6] border-[#ECC850] shadow-xs'
                            : 'bg-white border-[rgba(218,185,114,0.3)] hover:border-[#ECC850]'
                        }`}
                      >
                        <img src="./assets/partner_vnpay.png" alt="VNPAY" className="h-3.5 object-contain" />
                        <span className="text-[9px] font-medium text-[#23211E]">VNPAY QR</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {!isSubmitted && (
          <div className="p-6 border-t border-[rgba(218,185,114,0.25)] bg-[#FAF8F5] space-y-3 sticky bottom-0">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-[#78716C]">
                <span>Tạm tính ({items.length} món):</span>
                <span>{subtotal.toLocaleString('vi-VN')} VNĐ</span>
              </div>
              <div className="flex justify-between text-[#78716C]">
                <span>Phí vận chuyển:</span>
                <span className={shippingFee === 0 ? 'text-[#B38528] font-bold' : ''}>
                  {shippingFee === 0 ? 'MIỄN PHÍ' : `${shippingFee.toLocaleString('vi-VN')} VNĐ`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#23211E] pt-2 border-t border-[rgba(218,185,114,0.2)]">
                <span>Tổng cộng (COD):</span>
                <span className="text-[#23211E] font-mono">{total.toLocaleString('vi-VN')} VNĐ</span>
              </div>
            </div>

            <button
              type="submit"
              form="order-form"
              disabled={items.length === 0}
              className="w-full py-3.5 bg-[#ECC850] hover:bg-[#F4D36C] disabled:opacity-40 disabled:cursor-not-allowed text-[#23211E] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-pastel-btn border border-[#D4A346]/40"
            >
              <Truck className="w-4 h-4" />
              <span>Xác Nhận Đặt Hàng Ngay</span>
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] font-mono text-[#78716C]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#B38528]" />
                Đồng kiểm khi nhận
              </span>
              <span>·</span>
              <span>Hỗ trợ đổi trả trong 7 ngày</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
