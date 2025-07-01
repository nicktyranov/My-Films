import { useDispatch, useSelector } from 'react-redux';
import styles from './Modal.module.css';
import { RootState } from '../../store/store';
import { hideModal } from '../../store/modalSlice';


export default function Modal() {
	const dispatch = useDispatch();
	const {isOpen, message} = useSelector((state: RootState) => state.modal);

	if (!isOpen){
		return null;
	} 

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button onClick={() => dispatch(hideModal())} className={styles.button}>Close</button>
				<p>{message}</p>
			</div>
		</div>
	);
}
