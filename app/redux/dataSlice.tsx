import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDumbbell,
  faWifi,
  faMugHot,
  faMoneyBillWave,
  faCouch,
  faCalendarCheck,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import spaces from "@/public/data.json";

interface Space {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description?: string | null;
  rules?: string | null;
  amenities?: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities?: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
  manager_id?: string | null;
  can_edit?: boolean;
}

interface Feature {
  icon: JSX.Element; // JSX element for FontAwesomeIcon
  title: string;
  description: string;
}

interface DataState {
  spaces: Space[];
  features: Feature[];
}

const initialState: DataState = {
  spaces: spaces,
  features: [
    {
      icon: <FontAwesomeIcon icon={faUsers} size="xl" />,
      title: "Community Events",
      description: "Connect and socialize with fellow members",
    },
    {
      icon: <FontAwesomeIcon icon={faDumbbell} size="xl" />,
      title: "Gym Facilities",
      description: "State-of-the-art equipment for all your fitness needs",
    },
    {
      icon: <FontAwesomeIcon icon={faWifi} size="xl" />,
      title: "High-Speed WiFi",
      description: "Stay connected and productive wherever you work",
    },
    {
      icon: <FontAwesomeIcon icon={faMugHot} size="xl" />,
      title: "Cafe & Tea Bar",
      description: "Relax and unwind with delicious refreshments",
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBillWave} size="xl" />,
      title: "Affordable",
      description: "Flexible membership plans to fit your budget",
    },
    {
      icon: <FontAwesomeIcon icon={faCouch} size="xl" />,
      title: "Comfort Lounges",
      description: "Unwind in our comfortable and stylish lounges",
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarCheck} size="xl" />,
      title: "Quick Booking",
      description: "Easily book classes and amenities online",
    },
    {
      icon: <FontAwesomeIcon icon={faVolleyball} size="xl" />,
      title: "Sports Area",
      description: "Enjoy a variety of sports activities",
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSpaces: (state, action: PayloadAction<Space[]>) => {
      state.spaces = action.payload;
    },
    setFeatures: (state, action: PayloadAction<Feature[]>) => {
      state.features = action.payload;
    },
  },
});

export const { setSpaces, setFeatures } = dataSlice.actions;

export default dataSlice.reducer;
