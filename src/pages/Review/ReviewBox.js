import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import SearchBox from "./SearchBox";
import Pagination from "./Paginaction";
import ReviewAdd from "./ReviewAdd";
import ReviewList from "./ReviewList";
import './ReviewBox.scss';
import { API } from "../../config";
import './ReviewBox.scss'

const ReviewBox = () => {
    const [review, setReview] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [reviewAddForm, setReviewAddForm] = useState(false);
    const [reviewValue, setreviewValue] = useState([]);
    const [selectMenu, setSelectMenu] = useState([]);
    const [imageSrc, setImageSrc] = useState('');
    const [selectMenuId, setSelectMenuId] = useState([]);
    const [totalReview, setTotalReview] = useState(0);
    const [isPhotoFilter, setIsPhotoFilter] = useState(false);
  
    const saveReviewInput = e => {
      setreviewValue(e.target.value);
    };
  
    const saveReviewMenu = target => {
      setSelectMenu(target);
    };
  
    const saveMenuId = id => {
      setSelectMenuId(id);
    };
  
    const isRemoveImg = () => {
      setImageSrc(false);
    };
  
    const encodeFileToBase64 = fileBlob => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise(resolve => {
        reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
        };
      });
    };

    const onCreateReview = e => {
        fetch(`REVIEW`, {
          method: 'POST',
          body: JSON.stringify({
            title: selectMenu,
            product_id: selectMenuId,
            userInput: reviewValue,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setReview(data);
          });
      };

      const isReviewAdd = () => {
        setReviewAddForm(true);
      };
    
      const limit = 10;
      const navigate = useNavigate();
      const location = useLocation();
    
      useEffect(() => {
        fetch(`REVIEW${location.search}`)
          .then(res => res.json())
          .then(data => {
            setTotalReview(data.total_review);
            setReview(data.review_list);
          });
      }, [location.search]);

      const getButtonIndex = buttonIndex => {
        const offset = (buttonIndex - 1) * limit;
        const queryString = `?offset=${offset}&limit=${limit}`;
        navigate(queryString);
      };
    
      useEffect(() => {
        fetch(`REVIEW${location.search}`)
          .then(res => res.json())
          .then(data => {
            setReview(data.review_list);
          });
      }, [location.search]);

      const getSearchInput = Input => {
        setSearchInput(Input);
      };
    
      const getSearchInputValue = e => {
        e.preventDefault();
        const queryString = `?search=${searchInput}`;
        navigate(queryString);
      };
    
      const handlePhotoFilter = e => {
        e.preventDefault();
        setIsPhotoFilter(!isPhotoFilter);
        if (!location.search) {
          const queryString = `?photo=http`;
          navigate(queryString);
        } else {
          navigate('/review');
        }
      };

      return (
        <section className="reviewbox">
          <SearchBox
            getSearchInput={getSearchInput}
            getSearchInputValue={getSearchInputValue}
          />
    
          <div className="reviewListHead">
            <h2 className="reviewSum">후기 {totalReview}건</h2>
            <div className="reviewListRight">
              <button className="reviewAdd" onClick={isReviewAdd}>
                <FontAwesomeIcon icon={faPlus} />
                <span className="reviewAddDesc">후기 쓰기</span>
              </button>
    
              <button className="reviewAdd" onClick={handlePhotoFilter}>
                <FontAwesomeIcon
                  icon={isPhotoFilter ? faPlusCircle : faCircleCheck}
                  size="1.5x"
                />
              </button>
            </div>
          </div>
          <hr />
    
          {reviewAddForm && (
            <ReviewAdd
              reviewAdd={reviewAddForm}
              isReviewAdd={setReviewAddForm}
              setReview={setReview}
              reviewValue={reviewValue}
              setreviewValue={setreviewValue}
              saveReviewInput={saveReviewInput}
              onCreateReview={onCreateReview}
              saveReviewMenu={saveReviewMenu}
              imageSrc={imageSrc}
              isRemoveImg={isRemoveImg}
              encodeFileToBase64={encodeFileToBase64}
              selectMenu={selectMenu}
              saveMenuId={saveMenuId}
            />
          )}
    
          <ReviewList review={review} />
    
          <Pagination
            total={totalReview}
            limit={limit}
            getButtonIndex={getButtonIndex}
          />
        </section>
      );
    };
    
    export default ReviewBox;
