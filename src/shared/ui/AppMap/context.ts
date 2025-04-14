import type { InjectionKey } from 'vue'
import Map from 'ol/Map'

export const mapKey = Symbol('AppMap') as InjectionKey<Map>
