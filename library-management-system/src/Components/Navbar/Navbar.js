import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<ul id="navbar">
				<div id="logo">
					<Link to="/">
						<svg
							width="84"
							height="25"
							viewBox="0 0 84 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.98584 19H0.0717773V1.76904H2.45801V16.9961H9.98584V19ZM18.4629 7.66211H14.5474V5.76367H20.7832V17.0884H24.7251V19H14.1123V17.0884H18.4629V7.66211ZM19.2671 0.213379C19.522 0.213379 19.7593 0.261719 19.979 0.358398C20.1987 0.446289 20.3877 0.57373 20.5459 0.740723C20.7129 0.907715 20.8403 1.10107 20.9282 1.3208C21.0249 1.53174 21.0732 1.76465 21.0732 2.01953C21.0732 2.26563 21.0249 2.49854 20.9282 2.71826C20.8403 2.93799 20.7129 3.13135 20.5459 3.29834C20.3877 3.46533 20.1987 3.59717 19.979 3.69385C19.7593 3.78174 19.522 3.82568 19.2671 3.82568C19.0122 3.82568 18.7749 3.78174 18.5552 3.69385C18.3354 3.59717 18.1421 3.46533 17.9751 3.29834C17.8169 3.13135 17.6895 2.93799 17.5928 2.71826C17.5049 2.49854 17.4609 2.26563 17.4609 2.01953C17.4609 1.76465 17.5049 1.53174 17.5928 1.3208C17.6895 1.10107 17.8169 0.907715 17.9751 0.740723C18.1421 0.57373 18.3354 0.446289 18.5552 0.358398C18.7749 0.261719 19.0122 0.213379 19.2671 0.213379ZM40.1104 12.1445C40.1104 13.2432 39.9565 14.2275 39.6489 15.0977C39.3501 15.959 38.9194 16.6929 38.3569 17.2993C37.8032 17.897 37.1265 18.3584 36.3267 18.6836C35.5269 19 34.626 19.1582 33.624 19.1582C32.8418 19.1582 32.042 19.0835 31.2246 18.9341C30.4072 18.7847 29.5986 18.5474 28.7988 18.2222V0.371582H31.0928V5.5L30.9873 7.95215C31.6465 7.06445 32.3496 6.44043 33.0967 6.08008C33.8525 5.71094 34.6611 5.52637 35.5225 5.52637C36.2783 5.52637 36.9419 5.68457 37.5132 6.00098C38.0845 6.31738 38.5635 6.76562 38.9502 7.3457C39.3369 7.91699 39.627 8.61133 39.8203 9.42871C40.0137 10.2373 40.1104 11.1426 40.1104 12.1445ZM37.7637 12.25C37.7637 11.5557 37.7109 10.9185 37.6055 10.3384C37.5088 9.7583 37.3506 9.26172 37.1309 8.84863C36.9111 8.43555 36.6299 8.11475 36.2871 7.88623C35.9443 7.64893 35.5356 7.53027 35.061 7.53027C34.771 7.53027 34.4766 7.57861 34.1777 7.67529C33.8789 7.76318 33.5669 7.91699 33.2417 8.13672C32.9253 8.34766 32.5869 8.6333 32.2266 8.99365C31.875 9.34521 31.4971 9.78467 31.0928 10.312V16.7324C31.541 16.9082 31.998 17.0488 32.4639 17.1543C32.9297 17.251 33.3735 17.2993 33.7954 17.2993C34.3228 17.2993 34.8237 17.2158 35.2983 17.0488C35.7817 16.8818 36.2036 16.605 36.564 16.2183C36.9331 15.8228 37.2231 15.3042 37.4341 14.6626C37.6538 14.0122 37.7637 13.208 37.7637 12.25ZM54.6782 14.333C54.6782 15.1504 54.5112 15.8667 54.1772 16.4819C53.8433 17.0972 53.3774 17.6113 52.7798 18.0244C52.1821 18.4287 51.4614 18.7319 50.6177 18.9341C49.7827 19.1362 48.8599 19.2373 47.8491 19.2373C47.3921 19.2373 46.9351 19.2197 46.478 19.1846C46.0298 19.1494 45.5947 19.1055 45.1729 19.0527C44.7598 19 44.3687 18.9385 43.9995 18.8682C43.6304 18.7979 43.2964 18.7231 42.9976 18.644V16.3765C43.6567 16.6226 44.395 16.8159 45.2124 16.9565C46.0386 17.0972 46.9746 17.1675 48.0205 17.1675C48.7764 17.1675 49.418 17.1104 49.9453 16.9961C50.4814 16.873 50.9165 16.6973 51.2505 16.4688C51.5933 16.2314 51.8394 15.9458 51.9888 15.6118C52.147 15.2778 52.2261 14.8955 52.2261 14.4648C52.2261 13.999 52.0942 13.6035 51.8306 13.2783C51.5757 12.9443 51.2373 12.6499 50.8154 12.395C50.3936 12.1313 49.9102 11.894 49.3652 11.6831C48.8291 11.4634 48.2798 11.2393 47.7173 11.0107C47.1548 10.7822 46.6011 10.5361 46.0562 10.2725C45.52 10 45.041 9.68359 44.6191 9.32324C44.1973 8.9541 43.8545 8.52344 43.5908 8.03125C43.3359 7.53906 43.2085 6.95459 43.2085 6.27783C43.2085 5.68896 43.3315 5.10889 43.5776 4.5376C43.8237 3.96631 44.2061 3.46094 44.7246 3.02148C45.2432 2.57324 45.9067 2.21289 46.7153 1.94043C47.5327 1.66797 48.5039 1.53174 49.6289 1.53174C49.9189 1.53174 50.231 1.54492 50.5649 1.57129C50.9077 1.59766 51.2505 1.63721 51.5933 1.68994C51.9448 1.73389 52.2876 1.78662 52.6216 1.84814C52.9644 1.90967 53.2808 1.97559 53.5708 2.0459V4.15527C52.894 3.96191 52.2173 3.81689 51.5405 3.72021C50.8638 3.61475 50.209 3.56201 49.5762 3.56201C48.2314 3.56201 47.2427 3.78613 46.6099 4.23438C45.9771 4.68262 45.6606 5.28467 45.6606 6.04053C45.6606 6.50635 45.7881 6.90625 46.043 7.24023C46.3066 7.57422 46.6494 7.87305 47.0713 8.13672C47.4932 8.40039 47.9722 8.64209 48.5083 8.86182C49.0532 9.07275 49.6069 9.29248 50.1694 9.521C50.7319 9.74951 51.2812 10 51.8174 10.2725C52.3623 10.5449 52.8457 10.8701 53.2676 11.248C53.6895 11.6172 54.0278 12.0522 54.2827 12.5532C54.5464 13.0542 54.6782 13.6475 54.6782 14.333ZM70.2612 5.76367L65.7524 17.6025C65.2866 18.8066 64.8032 19.8438 64.3022 20.7139C63.8101 21.584 63.2695 22.2959 62.6807 22.8496C62.0918 23.4121 61.4458 23.8252 60.7427 24.0889C60.0396 24.3525 59.2529 24.4844 58.3828 24.4844C58.1543 24.4844 57.9478 24.48 57.7632 24.4712C57.5786 24.4624 57.3765 24.4492 57.1567 24.4316V22.3486C57.3501 22.375 57.561 22.397 57.7896 22.4146C58.0181 22.4409 58.2598 22.4541 58.5146 22.4541C58.9365 22.4541 59.3276 22.3926 59.688 22.2695C60.0571 22.1465 60.4043 21.9443 60.7295 21.6631C61.0547 21.3906 61.3667 21.0347 61.6655 20.5952C61.9644 20.1558 62.2544 19.624 62.5356 19L57.249 5.76367H59.8594L63.208 14.5176L63.8804 16.5742L64.645 14.4648L67.7432 5.76367H70.2612ZM83.814 15.3877C83.814 15.8535 83.7349 16.271 83.5767 16.6401C83.4185 17.0093 83.2031 17.3389 82.9307 17.6289C82.6582 17.9102 82.3418 18.1519 81.9814 18.354C81.6211 18.5562 81.2344 18.7231 80.8213 18.855C80.417 18.9868 79.9995 19.0835 79.5688 19.145C79.1382 19.2065 78.7163 19.2373 78.3032 19.2373C77.4067 19.2373 76.5806 19.1978 75.8247 19.1187C75.0776 19.0396 74.3438 18.9121 73.623 18.7363V16.627C74.3965 16.8467 75.1655 17.0137 75.9302 17.1279C76.6948 17.2422 77.4551 17.2993 78.2109 17.2993C79.3096 17.2993 80.1226 17.1499 80.6499 16.8511C81.1772 16.5522 81.4409 16.126 81.4409 15.5723C81.4409 15.335 81.397 15.124 81.3091 14.9395C81.23 14.7461 81.0806 14.5659 80.8608 14.3989C80.6411 14.2231 80.2983 14.043 79.8325 13.8584C79.3755 13.6738 78.7471 13.4629 77.9473 13.2256C77.3496 13.0498 76.7959 12.8521 76.2861 12.6323C75.7852 12.4038 75.3501 12.1357 74.981 11.8281C74.6118 11.5205 74.3218 11.1602 74.1108 10.7471C73.8999 10.334 73.7944 9.84619 73.7944 9.28369C73.7944 8.91455 73.8779 8.51025 74.0449 8.0708C74.2207 7.63135 74.5151 7.22266 74.9282 6.84473C75.3413 6.4668 75.8994 6.15479 76.6025 5.90869C77.3057 5.65381 78.1846 5.52637 79.2393 5.52637C79.7578 5.52637 80.3335 5.55713 80.9663 5.61865C81.5991 5.67139 82.2583 5.76807 82.9438 5.90869V7.95215C82.2231 7.77637 81.5376 7.64893 80.8872 7.56982C80.2456 7.48193 79.6875 7.43799 79.2129 7.43799C78.6416 7.43799 78.1582 7.48193 77.7627 7.56982C77.376 7.65771 77.0596 7.78076 76.8135 7.93896C76.5762 8.08838 76.4048 8.26855 76.2993 8.47949C76.1938 8.68164 76.1411 8.90137 76.1411 9.13867C76.1411 9.37598 76.1851 9.59131 76.2729 9.78467C76.3696 9.97803 76.541 10.167 76.7871 10.3516C77.042 10.5273 77.3936 10.7075 77.8418 10.8921C78.29 11.0679 78.8745 11.2612 79.5952 11.4722C80.3774 11.7007 81.0366 11.9424 81.5728 12.1973C82.1089 12.4434 82.5439 12.7202 82.8779 13.0278C83.2119 13.3354 83.4492 13.6826 83.5898 14.0693C83.7393 14.4561 83.814 14.8955 83.814 15.3877Z"
								fill="#BCEDFC"
							/>
						</svg>
					</Link>
				</div>
				<div id="nav-links">
					<li className="nav-links">
						<Link className="nav-links-a" to="/sign-up">
							Sign Up
						</Link>
					</li>
					<li className="nav-links">
						<Link className="nav-links-a" to="/sign-in">
							Sign In
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}