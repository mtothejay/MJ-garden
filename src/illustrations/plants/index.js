export { default as Oregano } from './Oregano'
export { default as Thyme } from './Thyme'
export { default as Chives } from './Chives'
export { default as BasilSweet } from './BasilSweet'
export { default as Parsley } from './Parsley'
export { default as Cilantro } from './Cilantro'
export { default as Dill } from './Dill'
export { default as Arugula } from './Arugula'
export { default as TomatoSweetie } from './TomatoSweetie'
export { default as Aster } from './Aster'
export { default as Pansy } from './Pansy'
export { default as Delphinium } from './Delphinium'
export { default as Lupine } from './Lupine'
export { default as BasilTulsi } from './BasilTulsi'
export { default as Valerian } from './Valerian'
export { default as Yarrow } from './Yarrow'
export { default as Lavender } from './Lavender'
export { default as Echinacea } from './Echinacea'
export { default as Chamomile } from './Chamomile'
export { default as SwissChard } from './SwissChard'
export { default as BasilThai } from './BasilThai'
export { default as Rosemary } from './Rosemary'
export { default as Shiso } from './Shiso'
export { default as Mint } from './Mint'
export { default as Spinach } from './Spinach'
export { default as Calendula } from './Calendula'
export { default as Lettuce } from './Lettuce'
export { default as Alyssum } from './Alyssum'
export { default as Nasturtium } from './Nasturtium'
export { default as Marigold } from './Marigold'
export { default as Kale } from './Kale'
export { default as Snapdragon } from './Snapdragon'

/**
 * Lookup a plant illustration component by plantKey from plants.json.
 * Returns the component or null if not found.
 */
const plantKeyMap = {
  'oregano': Oregano,
  'thyme': Thyme,
  'chives': Chives,
  'basil-sweet': BasilSweet,
  'parsley': Parsley,
  'cilantro': Cilantro,
  'dill': Dill,
  'arugula': Arugula,
  'tomato-sweetie': TomatoSweetie,
  'aster': Aster,
  'pansy': Pansy,
  'delphinium': Delphinium,
  'lupine': Lupine,
  'basil-tulsi': BasilTulsi,
  'valerian': Valerian,
  'yarrow': Yarrow,
  'lavender': Lavender,
  'echinacea': Echinacea,
  'chamomile': Chamomile,
  'swiss-chard': SwissChard,
  'basil-thai': BasilThai,
  'rosemary': Rosemary,
  'shiso': Shiso,
  'mint': Mint,
  'spinach': Spinach,
  'calendula': Calendula,
  'lettuce': Lettuce,
  'alyssum': Alyssum,
  'nasturtium': Nasturtium,
  'marigold': Marigold,
  'kale': Kale,
  'snapdragon': Snapdragon,
}

export function getPlantIllustration(plantKey) {
  return plantKeyMap[plantKey] || null
}
