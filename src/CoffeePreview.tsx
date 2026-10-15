import { useLayoutEffect, useRef, useState } from 'react'
import imgImage2341 from './assets/coffee/e7c34.png'
import imgC78708F998F345E0B9656822B7C27A371 from './assets/coffee/8513b.png'
import imgE8C0A999Fefd4D80Bc97B89A4E7B0F251 from './assets/coffee/21bce.png'
import img336E2807Ba5447A69Ed346Bf404E7F6F1 from './assets/coffee/d5a12.png'
import imgImage2299 from './assets/coffee/2e81f.png'
import imgImage2340 from './assets/coffee/2466d.png'
import imgImage2300 from './assets/coffee/e959d.png'
import imgImage2301 from './assets/coffee/a0852.png'
import imgE730D205B9E0431CA2682644B51F5Fff1 from './assets/coffee/9ff42.png'
import img2E94E8A795Ae4933Beae71Afd069Bd4EPhotoroom1 from './assets/coffee/25623.png'
import img5A77332E76884B169D74E14A87A6Bbe3Photoroom1 from './assets/coffee/ef627.png'
import imgImage23041 from './assets/coffee/10769.png'
import imgImage2299Photoroom1 from './assets/coffee/45dd0.png'
import imgImage2314Photoroom1 from './assets/coffee/c6bb5.png'
import imgImage2312Photoroom1 from './assets/coffee/1e99d.png'
import imgImage23131 from './assets/coffee/0ea2c.png'
import imgFrame2087328933 from './assets/coffee/def70.svg'
import imgFrame2087328918 from './assets/coffee/2f9da.svg'
import imgVector1039 from './assets/coffee/73f02.svg'
import imgVector1040 from './assets/coffee/3fba9.svg'
import imgVector1041 from './assets/coffee/febc7.svg'
import imgWifi from './assets/coffee/33242.svg'
import imgCellularConnection from './assets/coffee/be610.svg'
import imgCap from './assets/coffee/80f6e.svg'
import imgFrame2087328094 from './assets/coffee/11072.svg'
import imgFrame2087328919 from './assets/coffee/7ffae.svg'
import imgFrame2087328920 from './assets/coffee/638e0.svg'
import imgVector from './assets/coffee/aa4b1.svg'
import imgFrame2087328932 from './assets/coffee/f5151.svg'
import imgFrame2087328934 from './assets/coffee/54769.svg'
import './coffee-preview.css'

export default function CoffeePreview() {
 const ref = useRef<HTMLSpanElement>(null)
 const [scale, setScale] = useState(1)
 useLayoutEffect(() => {
  const element = ref.current
  if (!element) return
  const observer = new ResizeObserver(() => setScale(element.clientWidth / 712))
  observer.observe(element)
  return () => observer.disconnect()
 }, [])
 return <span className="coffee-preview" ref={ref} role="img" aria-label="Концепция Simple Coffee: три экрана мобильного приложения кофейни"><span className="coffee-preview__canvas" style={{ transform: `translate(-50%, -50%) scale(${scale})` }} aria-hidden="true"><div className="coffee-layer-1" data-node-id="9260:2049" data-name="Image">
      <div className="coffee-layer-2" data-node-id="9260:2053" data-name="концепт2">
        <div className="coffee-layer-3" data-node-id="9260:2057" data-name="image 2341">
          <div className="coffee-layer-4">
            <img alt="" className="coffee-layer-5" src={imgImage2341} />
          </div>
        </div>
        <div className="coffee-layer-6" data-node-id="9260:2074">
          <img alt="" className="coffee-layer-7" src={imgFrame2087328933} />
        </div>
        <div className="coffee-layer-8" data-node-id="9260:2076">
          <img alt="" className="coffee-layer-9" src={imgFrame2087328918} />
        </div>
        <div className="coffee-layer-10" data-node-id="9260:2078">
          <div className="coffee-layer-11" data-node-id="9260:2079">
            <p className="coffee-layer-12">кокосовое</p>
            <p className="coffee-layer-13">молоко</p>
          </div>
        </div>
        <div className="coffee-layer-14" data-node-id="9260:2080">
          <p className="coffee-layer-15" data-node-id="9260:2081">
            сырная
            <br aria-hidden />
            пенка
          </p>
          <div className="coffee-layer-16" data-node-id="9260:2082" data-name="c78708f9-98f3-45e0-b965-6822b7c27a37 1">
            <img alt="" className="coffee-layer-17" src={imgC78708F998F345E0B9656822B7C27A371} />
          </div>
          <div className="coffee-layer-18" data-node-id="9260:2083">
            <p className="coffee-layer-19" data-node-id="9260:2084">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-20" data-node-id="9260:2085">
          <p className="coffee-layer-21" data-node-id="9260:2086">
            260 ₽
          </p>
        </div>
        <div className="coffee-layer-22" data-node-id="9260:2087">
          <div className="coffee-layer-23" data-node-id="9260:2088">
            <div className="coffee-layer-24" data-node-id="9260:2089">
              <div className="coffee-layer-25" data-node-id="9260:2090">
                <div className="coffee-layer-26">
                  <img alt="" className="coffee-layer-27" src={imgVector1039} />
                </div>
              </div>
              <div className="coffee-layer-28" data-node-id="9260:2091">
                <div className="coffee-layer-29">
                  <img alt="" className="coffee-layer-30" src={imgVector1040} />
                </div>
              </div>
              <div className="coffee-layer-31" data-node-id="9260:2092">
                <div className="coffee-layer-32">
                  <img alt="" className="coffee-layer-33" src={imgVector1041} />
                </div>
              </div>
            </div>
          </div>
          <p className="coffee-layer-34" data-node-id="9260:2093">
            200 мл
          </p>
        </div>
        <div className="coffee-layer-35" data-node-id="9260:2094">
          <p className="coffee-layer-36" data-node-id="9260:2095">
            сахар
          </p>
          <div className="coffee-layer-37" data-node-id="9260:2096" data-name="e8c0a999-fefd-4d80-bc97-b89a4e7b0f25 1">
            <img alt="" className="coffee-layer-38" src={imgE8C0A999Fefd4D80Bc97B89A4E7B0F251} />
          </div>
          <div className="coffee-layer-39" data-node-id="9260:2097">
            <p className="coffee-layer-40" data-node-id="9260:2098">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-41" data-node-id="9260:2099" data-name="336e2807-ba54-47a6-9ed3-46bf404e7f6f 1">
          <img alt="" className="coffee-layer-42" src={img336E2807Ba5447A69Ed346Bf404E7F6F1} />
        </div>
        <p className="coffee-layer-43" data-node-id="9260:2100">
          грушевый айс латте
        </p>
        <div className="coffee-layer-44" data-node-id="9269:2499" data-name="Верхняя панель">
          <div className="coffee-layer-45" data-node-id="9269:2500" data-name="Right">
            <div className="coffee-layer-46" data-node-id="9269:2501" data-name="Wifi">
              <img alt="" className="coffee-layer-47" src={imgWifi} />
            </div>
            <div className="coffee-layer-48" data-node-id="9269:2505" data-name="Cellular Connection">
              <img alt="" className="coffee-layer-49" src={imgCellularConnection} />
            </div>
            <div className="coffee-layer-50" data-node-id="9269:2510" data-name="Battery">
              <div className="coffee-layer-51" data-node-id="9269:2511" data-name="Border" />
              <div className="coffee-layer-52" data-node-id="9269:2512" data-name="Cap">
                <img alt="" className="coffee-layer-53" src={imgCap} />
              </div>
              <div className="coffee-layer-54" data-node-id="9269:2513" data-name="Capacity" />
            </div>
          </div>
          <p className="coffee-layer-55" data-node-id="9269:2514">
            12:48
          </p>
        </div>
      </div>
      <div className="coffee-layer-56" data-node-id="9260:2105" data-name="концепт1">
        <div className="coffee-layer-57" data-node-id="9260:2108" data-name="image 2299">
          <div aria-hidden className="coffee-layer-58">
            <img alt="" className="coffee-layer-59" src={imgImage2299} />
            <div className="coffee-layer-60" />
          </div>
        </div>
        <div className="coffee-layer-61" data-node-id="9260:2109" />
        <div className="coffee-layer-62" data-node-id="9260:2126">
          <div className="coffee-layer-63" data-node-id="9260:2127" data-name="image 2338" />
          <div className="coffee-layer-64" data-node-id="9260:2128" data-name="image 2340">
            <img alt="" className="coffee-layer-65" src={imgImage2340} />
          </div>
        </div>
        <p className="coffee-layer-66" data-node-id="9260:2129">
          ул. Луначарского, 139
        </p>
        <p className="coffee-layer-67" data-node-id="9260:2130">
          8:00-21:00
        </p>
        <div className="coffee-layer-68" data-node-id="9260:2131">
          <div className="coffee-layer-69" data-node-id="9260:2132">
            <div className="coffee-layer-70" data-node-id="9260:2133">
              <img alt="" className="coffee-layer-71" src={imgFrame2087328094} />
            </div>
            <div className="coffee-layer-72" data-node-id="9260:2135">
              <div className="coffee-layer-73" data-node-id="9260:2136">
                <p className="coffee-layer-74" data-node-id="9260:2137">
                  Новинки
                </p>
              </div>
              <div className="coffee-layer-75" data-node-id="9260:2138">
                <p className="coffee-layer-76" data-node-id="9260:2139">
                  Кофе
                </p>
              </div>
              <div className="coffee-layer-77" data-node-id="9260:2140">
                <p className="coffee-layer-78" data-node-id="9260:2141">
                  Напитки
                </p>
              </div>
              <div className="coffee-layer-79" data-node-id="9260:2142">
                <p className="coffee-layer-80" data-node-id="9260:2143">
                  Завтраки
                </p>
              </div>
              <div className="coffee-layer-81" data-node-id="9260:2144">
                <p className="coffee-layer-82" data-node-id="9260:2145">
                  Десерты
                </p>
              </div>
            </div>
          </div>
          <div className="coffee-layer-83" data-node-id="9260:2146">
            <div className="coffee-layer-84" data-node-id="9260:2147" data-name="image 2299">
              <img alt="" className="coffee-layer-85" src={imgImage2300} />
            </div>
            <div className="coffee-layer-86" data-node-id="9260:2148">
              <img alt="" className="coffee-layer-87" src={imgFrame2087328919} />
            </div>
          </div>
          <div className="coffee-layer-88" data-node-id="9260:2150">
            <div className="coffee-layer-89" data-node-id="9260:2151" data-name="image 2301">
              <img alt="" className="coffee-layer-90" src={imgImage2301} />
            </div>
            <div className="coffee-layer-91" data-node-id="9260:2152">
              <img alt="" className="coffee-layer-92" src={imgFrame2087328920} />
            </div>
          </div>
          <div className="coffee-layer-93" data-node-id="9260:2154">
            <div className="coffee-layer-94" data-node-id="9260:2155">
              <p className="coffee-layer-95">эспрессо-тоник</p>
              <p className="coffee-layer-96">с апельсином</p>
            </div>
            <div className="coffee-layer-97" data-node-id="9260:2156">
              <p className="coffee-layer-98" data-node-id="9260:2157">
                от 260 ₽
              </p>
            </div>
          </div>
          <div className="coffee-layer-99" data-node-id="9260:2158">
            <p className="coffee-layer-100" data-node-id="9260:2159">
              латте с кремовой пенкой
            </p>
            <div className="coffee-layer-101" data-node-id="9260:2160">
              <p className="coffee-layer-102" data-node-id="9260:2161">
                от 320 ₽
              </p>
            </div>
          </div>
        </div>
        <div className="coffee-layer-103" data-node-id="9260:2162">
          <div className="coffee-layer-104" data-node-id="9260:2163">
            <div className="coffee-layer-105" data-node-id="9260:2164" />
          </div>
          <div className="coffee-layer-106" data-node-id="9260:2165" />
          <div className="coffee-layer-107" data-node-id="9260:2166" />
          <div className="coffee-layer-108" data-node-id="9260:2167" />
        </div>
        <div className="coffee-layer-109" data-node-id="9260:2168">
          <div className="coffee-layer-110" data-node-id="9260:2169">
            <div className="coffee-layer-111" data-node-id="9260:2170">
              <div className="coffee-layer-112" data-node-id="9260:2171">
                <div className="coffee-layer-113" data-node-id="9260:2172" />
                <div className="coffee-layer-114" data-node-id="9260:2173" />
                <div className="coffee-layer-115" data-node-id="9260:2174" />
                <div className="coffee-layer-116" data-node-id="9260:2175" />
                <div className="coffee-layer-117" data-node-id="9260:2176" />
              </div>
            </div>
            <div className="coffee-layer-118" data-node-id="9260:2177" />
            <div className="coffee-layer-119" data-node-id="9260:2178" />
            <div className="coffee-layer-120" data-node-id="9260:2179" />
          </div>
        </div>
        <div className="coffee-layer-121" data-node-id="9260:2180" data-name="Vector">
          <img alt="" className="coffee-layer-122" src={imgVector} />
        </div>
        <div className="coffee-layer-123" data-node-id="9260:2181">
          <p className="coffee-layer-124" data-node-id="9260:2182">
            4/5
          </p>
          <div className="coffee-layer-125" data-node-id="9260:2183">
            <img alt="" className="coffee-layer-126" src={imgFrame2087328932} />
          </div>
        </div>
        <p className="coffee-layer-127" data-node-id="9260:2185">
          пополнение
          <br aria-hidden />
          вкусов
        </p>
        <div className="coffee-layer-128" data-node-id="9269:2515" data-name="Верхняя панель">
          <div className="coffee-layer-129" data-node-id="9269:2516" data-name="Right">
            <div className="coffee-layer-130" data-node-id="9269:2517" data-name="Wifi">
              <img alt="" className="coffee-layer-131" src={imgWifi} />
            </div>
            <div className="coffee-layer-132" data-node-id="9269:2521" data-name="Cellular Connection">
              <img alt="" className="coffee-layer-133" src={imgCellularConnection} />
            </div>
            <div className="coffee-layer-134" data-node-id="9269:2526" data-name="Battery">
              <div className="coffee-layer-135" data-node-id="9269:2527" data-name="Border" />
              <div className="coffee-layer-136" data-node-id="9269:2528" data-name="Cap">
                <img alt="" className="coffee-layer-137" src={imgCap} />
              </div>
              <div className="coffee-layer-138" data-node-id="9269:2529" data-name="Capacity" />
            </div>
          </div>
          <p className="coffee-layer-139" data-node-id="9269:2530">
            12:48
          </p>
        </div>
      </div>
      <div className="coffee-layer-140" data-node-id="9260:2186" data-name="концепт3">
        <div className="coffee-layer-141" data-node-id="9260:2211">
          <img alt="" className="coffee-layer-142" src={imgFrame2087328934} />
        </div>
        <p className="coffee-layer-143" data-node-id="9260:2215">
          попробуй все напитки
          <br aria-hidden />и получи особый приз
        </p>
        <p className="coffee-layer-144" data-node-id="9260:2216">
          коллекция напитков
        </p>
        <div className="coffee-layer-145" data-node-id="9260:2217">
          <p className="coffee-layer-146" data-node-id="9260:2218">
            получить подарок
          </p>
        </div>
        <div className="coffee-layer-147" data-node-id="9260:2219">
          <div className="coffee-layer-148" data-node-id="9260:2220" data-name="e730d205-b9e0-431c-a268-2644b51f5fff 1">
            <div className="coffee-layer-149">
              <img alt="" className="coffee-layer-150" src={imgE730D205B9E0431CA2682644B51F5Fff1} />
            </div>
          </div>
        </div>
        <div className="coffee-layer-151" data-node-id="9260:2221">
          <div className="coffee-layer-152" data-node-id="9260:2222" data-name="2e94e8a7-95ae-4933-beae-71afd069bd4e-Photoroom 1">
            <img alt="" className="coffee-layer-153" src={img2E94E8A795Ae4933Beae71Afd069Bd4EPhotoroom1} />
          </div>
        </div>
        <div className="coffee-layer-154" data-node-id="9260:2223">
          <div className="coffee-layer-155" data-node-id="9260:2224" data-name="5a77332e-7688-4b16-9d74-e14a87a6bbe3-Photoroom 1">
            <img alt="" className="coffee-layer-156" src={img5A77332E76884B169D74E14A87A6Bbe3Photoroom1} />
          </div>
          <div className="coffee-layer-157" data-node-id="9260:2225">
            <p className="coffee-layer-158" data-node-id="9260:2226">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-159" data-node-id="9260:2227">
          <div className="coffee-layer-160" data-node-id="9260:2228" data-name="image 2304 1">
            <div className="coffee-layer-161">
              <img alt="" className="coffee-layer-162" src={imgImage23041} />
            </div>
          </div>
        </div>
        <div className="coffee-layer-163" data-node-id="9260:2229">
          <div className="coffee-layer-164" data-node-id="9260:2230" data-name="image 2299-Photoroom 1">
            <img alt="" className="coffee-layer-165" src={imgImage2299Photoroom1} />
          </div>
          <div className="coffee-layer-166" data-node-id="9260:2231">
            <p className="coffee-layer-167" data-node-id="9260:2232">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-168" data-node-id="9260:2233">
          <div className="coffee-layer-169" data-node-id="9260:2234" data-name="image 2314-Photoroom 1">
            <img alt="" className="coffee-layer-170" src={imgImage2314Photoroom1} />
          </div>
          <div className="coffee-layer-171" data-node-id="9260:2235">
            <p className="coffee-layer-172" data-node-id="9260:2236">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-173" data-node-id="9260:2237">
          <div className="coffee-layer-174" data-node-id="9260:2238" data-name="image 2312-Photoroom 1">
            <div className="coffee-layer-175">
              <img alt="" className="coffee-layer-176" src={imgImage2312Photoroom1} />
            </div>
          </div>
        </div>
        <div className="coffee-layer-177" data-node-id="9260:2239">
          <div className="coffee-layer-178" data-node-id="9260:2240" data-name="image 2313 1">
            <img alt="" className="coffee-layer-179" src={imgImage23131} />
          </div>
          <div className="coffee-layer-180" data-node-id="9260:2241">
            <p className="coffee-layer-181" data-node-id="9260:2242">
              +
            </p>
          </div>
        </div>
        <div className="coffee-layer-182" data-node-id="9269:2482" data-name="Верхняя панель">
          <div className="coffee-layer-183" data-node-id="9269:2483" data-name="Right">
            <div className="coffee-layer-184" data-node-id="9269:2484" data-name="Wifi">
              <img alt="" className="coffee-layer-185" src={imgWifi} />
            </div>
            <div className="coffee-layer-186" data-node-id="9269:2488" data-name="Cellular Connection">
              <img alt="" className="coffee-layer-187" src={imgCellularConnection} />
            </div>
            <div className="coffee-layer-188" data-node-id="9269:2493" data-name="Battery">
              <div className="coffee-layer-189" data-node-id="9269:2494" data-name="Border" />
              <div className="coffee-layer-190" data-node-id="9269:2495" data-name="Cap">
                <img alt="" className="coffee-layer-191" src={imgCap} />
              </div>
              <div className="coffee-layer-192" data-node-id="9269:2496" data-name="Capacity" />
            </div>
          </div>
          <p className="coffee-layer-193" data-node-id="9269:2497">
            12:48
          </p>
        </div>
      </div>
    </div></span></span>
}
