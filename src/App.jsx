import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";   // ✅ FIXED
import SearchBox from "./components/SearchBox";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import SettingsModal from "./components/SettingsModal";
import { fetchWeatherByCity } from "./utils/api";
