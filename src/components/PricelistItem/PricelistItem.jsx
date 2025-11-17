import { useService } from "@/hooks/serviceContext";
import css from "./PricelistItem.module.css";

const PricelistItem = ({ item }) => {
    const { id = item.service_id, description, price } = item;

    let formatPrice = price;
    if (!isNaN(Number(price))) {
        if (Number(price) === 0) {
            formatPrice = "";
        } else {
            formatPrice = Number(price).toLocaleString("en-IN");
        }
    }

    const { context, setContext } = useService();
    const onClickPrice = () => {
        setContext(description);
    };

    return (
        <>
            <div className={css.pricelistItemWrapper} onClick={onClickPrice}>
                <div className={id % 2 === 0 ? css.pricelistDescriptionEven : css.pricelistDescriptionOdd}>
                    <span className={css.descriptionText}>{description}</span>
                </div>
                <div className={css.circleWrapper}>
                    <div className={id % 2 === 0 ? css.firstCircleEven : css.firstCircleOdd}>
                        <div className={id % 2 === 0 ? css.secondCircleEven : css.secondCircleOdd}>
                            <span className={css.priceText}>{formatPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricelistItem;
