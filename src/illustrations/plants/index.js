import Oregano from './Oregano'
import Thyme from './Thyme'
import Chives from './Chives'
import BasilSweet from './BasilSweet'
import Parsley from './Parsley'
import Cilantro from './Cilantro'
import Dill from './Dill'
import Arugula from './Arugula'
import TomatoSweetie from './TomatoSweetie'
import Aster from './Aster'
import Pansy from './Pansy'
import Delphinium from './Delphinium'
import Lupine from './Lupine'
import BasilTulsi from './BasilTulsi'
import Valerian from './Valerian'
import Yarrow from './Yarrow'
import Lavender from './Lavender'
import Echinacea from './Echinacea'
import Chamomile from './Chamomile'
import SwissChard from './SwissChard'
import BasilThai from './BasilThai'
import Rosemary from './Rosemary'
import Shiso from './Shiso'
import Mint from './Mint'
import Spinach from './Spinach'
import Calendula from './Calendula'
import Lettuce from './Lettuce'
import Alyssum from './Alyssum'
import Nasturtium from './Nasturtium'
import Marigold from './Marigold'
import Kale from './Kale'
import Snapdragon from './Snapdragon'

export {
  Oregano, Thyme, Chives, BasilSweet, Parsley, Cilantro, Dill, Arugula,
  TomatoSweetie, Aster, Pansy, Delphinium, Lupine, BasilTulsi, Valerian, Yarrow,
  Lavender, Echinacea, Chamomile, SwissChard, BasilThai, Rosemary, Shiso, Mint,
  Spinach, Calendula, Lettuce, Alyssum, Nasturtium, Marigold, Kale, Snapdragon,
}

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
