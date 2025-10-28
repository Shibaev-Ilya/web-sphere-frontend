import './feedbackform.scss';
import FeedForm from 'app/ui/feedform/feedform';
export default function FeedbackForm() {
  return (
        <section className="form-section" id="contact-us">
        <div className="container">
            <p className="form-section__title header-2">Напишите нам</p>
            <p className="form-section__subtitle">И мы свяжемся с вами в ближайшее время и обсудим детали работ</p>
            <FeedForm />
        </div>
    </section>
);}