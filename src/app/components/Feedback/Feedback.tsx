import './feedback.scss';
import FeedbackForm from 'app/ui/feedbackForm/feedbackForm';
export default function Feedback() {
  return (
        <section className="form-section" id="contact-us">
        <div className="container">
            <p className="form-section__title header-2 js-scroll-animate scroll-animate">Напишите нам</p>
            <p className="form-section__subtitle js-scroll-animate scroll-animate">И мы свяжемся с вами в ближайшее время и обсудим детали работ</p>
            <FeedbackForm />
        </div>
    </section>
);}