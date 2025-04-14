import type { InjectionKey } from 'vue'
import View from 'ol/View'

export const viewKey = Symbol('AppMapView') as InjectionKey<View>
