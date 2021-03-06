import { Injectable } from '@angular/core';

@Injectable()
export class VerbService {
	get(firstLetter?: string) {
		if (firstLetter) {
			if (firstLetter.length > 1) {
				firstLetter = firstLetter.charAt(0);
			}
			let allStartingWithLetter = verbs.filter(adjective => adjective.charAt(0) === firstLetter);
			return allStartingWithLetter[ Math.floor(Math.random() * allStartingWithLetter.length) ];
		}
		return verbs[ Math.floor(Math.random() * verbs.length) ];
	}
}

let verbs = [
	'abating',
	'abbreviating',
	'abiding',
	'aborting',
	'absconding',
	'absorbing',
	'abstaining',
	'abusing',
	'acceding',
	'accelerating',
	'accenting',
	'accentuating',
	'accepting',
	'accommodating',
	'accompanying',
	'accosting',
	'accusing',
	'aching',
	'achieving',
	'acknowledging',
	'acquiring',
	'acquiescing',
	'acting',
	'adapting',
	'adding',
	'addressing',
	'adhering',
	'adjusting',
	'administering',
	'admiring',
	'admitting',
	'admonishing',
	'adoring',
	'adorning',
	'advancing',
	'advertising',
	'advising',
	'advocating',
	'affirming',
	'affixing',
	'agonizing',
	'aggravating',
	'agreeing',
	'aiding',
	'aiming',
	'airing',
	'alerting',
	'aligning',
	'alleging',
	'allowing',
	'alluding',
	'alphabetizing',
	'altering',
	'alternating',
	'ambling',
	'amending',
	'amusing',
	'analyzing',
	'angling',
	'animating',
	'anointing',
	'annotating',
	'announcing',
	'annoying',
	'answering',
	'antagonizing',
	'anticipating',
	'apologizing',
	'appealling',
	'appearring',
	'appeasing',
	'applaudding',
	'applying',
	'appraising',
	'appreciating',
	'approaching',
	'appropriating',
	'approving',
	'arching',
	'arguing',
	'arising',
	'arranging',
	'arresting',
	'articulating',
	'ascending',
	'ascertaining',
	'asking',
	'assailling',
	'assaulting',
	'assaying',
	'assenting',
	'asserting',
	'assessing',
	'assigning',
	'assisting',
	'assuming',
	'assuring',
	'astonishing',
	'attaching',
	'attackking',
	'attempting',
	'attending',
	'auditing',
	'authorizing',
	'averting',
	'avoiding',
	'avowing',
	'awaiting',
	'awakening',
	'babbling',
	'backhanding',
	'backpedalling',
	'backtracking',
	'badgering',
	'badmouthing',
	'baffling',
	'baiting',
	'baking',
	'balancing',
	'balling',
	'bang',
	'banishing',
	'bantering',
	'baring',
	'bargaining',
	'barging',
	'barking',
	'barraging',
	'bartering',
	'bashing',
	'basking',
	'battbing',
	'bathing',
	'bawling',
	'baying',
	'beaming',
	'bearing',
	'beating',
	'beautifying',
	'beckoning',
	'becoming',
	'befalling',
	'beg',
	'beginning',
	'behaving',
	'beholding',
	'belching',
	'believing',
	'belittling',
	'bellowing',
	'bemoaning',
	'bending',
	'berating',
	'beseeching',
	'bestowing',
	'betting',
	'betraying',
	'bickering',
	'bidding',
	'binding',
	'biting',
	'blaming',
	'blanching',
	'blaring',
	'blaspheming',
	'blathering',
	'bleating',
	'bleeding',
	'blending',
	'blessing',
	'blinding',
	'blinking',
	'blocking',
	'blossoming',
	'blowing',
	'blubbering',
	'bludgeoning',
	'bluffing',
	'blundering',
	'blurting',
	'blushing',
	'blustering',
	'boasting',
	'bobbing',
	'boggling',
	'bolstering',
	'bolting',
	'bonding',
	'bonking',
	'booing',
	'booming',
	'boosting',
	'bopping',
	'boring',
	'bossing',
	'bouncing',
	'bounding',
	'bowing',
	'boxing',
	'bracing',
	'brag',
	'braiding',
	'brandishing',
	'brawling',
	'braying',
	'breaking',
	'breathing',
	'breeding',
	'breezing',
	'bribing',
	'bridling',
	'brightening',
	'bring',
	'bristling',
	'broadcasting',
	'broadening',
	'brooding',
	'browbeating',
	'browsing',
	'brushing',
	'bucking',
	'buckling',
	'buffing',
	'bug',
	'building',
	'bulging',
	'bullying',
	'bumbling',
	'bumping',
	'bunching',
	'bundling',
	'burbling',
	'burning',
	'burping',
	'burrowing',
	'bursting',
	'burying',
	'bussing',
	'busting',
	'bustling',
	'butchering',
	'buttoning',
	'buying',
	'buzzing',
	'cackling',
	'cajoling',
	'calculating',
	'calling',
	'calming',
	'cantillating',
	'canvassing',
	'capering',
	'capitulating',
	'capturing',
	'caring',
	'careening',
	'caressing',
	'carolling',
	'carrying',
	'cartwheeling',
	'carving',
	'cashing',
	'casting',
	'castling',
	'catapulting',
	'catcalling',
	'catching',
	'categorizing',
	'caterwauling',
	'causing',
	'cautioning',
	'cavorting',
	'cawing',
	'ceasing',
	'celebrating',
	'certifying',
	'challenging',
	'changing',
	'chanting',
	'chaperoning',
	'charging',
	'chasing',
	'chastening',
	'chastising',
	'chatting',
	'chattering',
	'cheating',
	'checking',
	'cheering',
	'cherishing',
	'chewing',
	'chiding',
	'chillin',
	'chilling',
	'chiming',
	'chirping',
	'chittering',
	'choking',
	'chomping',
	'choosing',
	'chopping',
	'chortling',
	'chucking',
	'chuckling',
	'cinching',
	'circling',
	'citing',
	'claiming',
	'clambering',
	'clamoring',
	'clamping',
	'clanging',
	'clapping',
	'clarifying',
	'clashing',
	'clasping',
	'classifying',
	'clawing',
	'cleaning',
	'cleansing',
	'clearing',
	'cleaving',
	'clenching',
	'clicking',
	'climbing',
	'clinching',
	'clinging',
	'clinking',
	'cliping',
	'closing',
	'clubbing',
	'clucking',
	'clutching',
	'coaching',
	'coaxing',
	'cobbling',
	'cocking',
	'coddling',
	'coercing',
	'coiling',
	'collapsing',
	'collecting',
	'colliding',
	'coloring',
	'combing',
	'combining',
	'comforting',
	'commanding',
	'commencing',
	'commending',
	'commenting',
	'commentating',
	'commiserating',
	'committing',
	'communicating',
	'comparing',
	'compelling',
	'competing',
	'complaining',
	'complimenting',
	'complying',
	'comporting',
	'composing',
	'comprehending',
	'compressing',
	'compromising',
	'concealing',
	'conceding',
	'concentrating',
	'concluding',
	'concurring',
	'condemning',
	'condescending',
	'condoning',
	'conducting',
	'confering',
	'confessing',
	'confiding',
	'confining',
	'confirming',
	'confiscating',
	'confronting',
	'confusing',
	'congratulating',
	'conjecturing',
	'connecting',
	'connoting',
	'conquering',
	'consecrating',
	'consenting',
	'conserving',
	'considering',
	'consigning',
	'consoling',
	'consorting',
	'conspiring',
	'constraining',
	'constricting',
	'constructing',
	'consulting',
	'contemplating',
	'contending',
	'contesting',
	'continuing',
	'contorting',
	'contracting',
	'contradicting',
	'contributing',
	'controlling',
	'convening',
	'converging',
	'conversing',
	'converting',
	'conveying',
	'convicting',
	'convincing',
	'convulsing',
	'cooing',
	'cooking',
	'cooling',
	'cooperating',
	'coordinating',
	'coping',
	'copying',
	'cornering',
	'correcting',
	'corresponding',
	'corroding',
	'corrupting',
	'coughing',
	'counselling',
	'counting',
	'countering',
	'counteracting',
	'courting',
	'covering',
	'coveting',
	'cowering',
	'cozening',
	'cracking',
	'crackling',
	'cradling',
	'cramming',
	'craning',
	'crashing',
	'craving',
	'crawling',
	'creating',
	'creasing',
	'creeping',
	'crimping',
	'cringing',
	'crinkling',
	'criticizing',
	'critiquing',
	'croaking',
	'crooking',
	'crooning',
	'cropping',
	'crossing',
	'crouching',
	'crowing',
	'crowding',
	'crumbling',
	'crumpling',
	'crunching',
	'crushing',
	'crying',
	'cuddling',
	'cuffing',
	'cupping',
	'curbing',
	'curing',
	'curling',
	'cursing',
	'curtsying',
	'curving',
	'cussing',
	'cutting',
	'dabbing',
	'dabbling',
	'dallying',
	'damaging',
	'dampening',
	'dancing',
	'dangling',
	'daring',
	'darkening',
	'darting',
	'dashing',
	'dawdling',
	'daydreaming',
	'dazzling',
	'deadpanning',
	'dealing',
	'debating',
	'decaying',
	'deciding',
	'deciphering',
	'declaiming',
	'declaring',
	'declining',
	'decorating',
	'decreasing',
	'decrying',
	'dedicating',
	'deducing',
	'deeming',
	'defending',
	'deferring',
	'defiling',
	'defining',
	'deflating',
	'deflecting',
	'defying',
	'delaying',
	'deleting',
	'deliberating',
	'delegating',
	'delivering',
	'delving',
	'demanding',
	'demonstrating',
	'denouncing',
	'denying',
	'depending',
	'deploring',
	'depositing',
	'depriving',
	'deriding',
	'descending',
	'describing',
	'desecrating',
	'designing',
	'despairing',
	'despoiling',
	'destroying',
	'detaching',
	'detecting',
	'determining',
	'developing',
	'devouring',
	'diagnosing',
	'dictating',
	'dying',
	'differing',
	'differentiating',
	'digging',
	'digesting',
	'digressing',
	'dilating',
	'dimming',
	'diminishing',
	'dimpling',
	'dining',
	'dipping',
	'directing',
	'disagreeing',
	'disappearing',
	'disapproving',
	'disbelieving',
	'discerning',
	'disciplining',
	'disclaiming',
	'disclosing',
	'discombobulating',
	'discouraging',
	'discovering',
	'discriminating',
	'discussing',
	'disentangling',
	'disfavoring',
	'disguising',
	'dislodging',
	'dismissing',
	'dismounting',
	'disobeying',
	'disparaging',
	'displacing',
	'displaying',
	'disporting',
	'disputing',
	'disregarding',
	'disrespecting',
	'dissembling',
	'dissolving',
	'distancing',
	'distinguishing',
	'distorting',
	'distracting',
	'distributing',
	'distrusting',
	'disturbing',
	'disusing',
	'dithering',
	'diving',
	'diverting',
	'dividing',
	'divulging',
	'doddering',
	'dodging',
	'doffing',
	'donating',
	'doodling',
	'doting',
	'doublechecking',
	'doubting',
	'downloading',
	'downplaying',
	'dozing',
	'drafting',
	'dragging',
	'draining',
	'dramatizing',
	'draping',
	'drawing',
	'drawling',
	'dreaming',
	'drenching',
	'dressing',
	'dribbling',
	'drifting',
	'drilling',
	'drinking',
	'dripping',
	'driving',
	'drivelling',
	'droning',
	'droolling',
	'drooping',
	'dropping',
	'drumming',
	'drying',
	'dubbing',
	'ducking',
	'duelling',
	'dumping',
	'dunking',
	'dusting',
	'dwelling',
	'dying',
	'easting',
	'eating',
	'eavesdropping',
	'echoing',
	'edging',
	'educating',
	'effusing',
	'elaborating',
	'elbowing',
	'electing',
	'elevating',
	'elucidating',
	'eluding',
	'embellishing',
	'embossing',
	'embracing',
	'embroidering',
	'emerging',
	'empathizing',
	'employing',
	'empowering',
	'emptying',
	'emulating',
	'encasing',
	'encircling',
	'enclosing',
	'encompassing',
	'encountering',
	'encouraging',
	'encroaching',
	'ending',
	'endangering',
	'endorsing',
	'enduring',
	'energizing',
	'enfolding',
	'enforcing',
	'engaging',
	'engraving',
	'engulfing',
	'enhancing',
	'enjoying',
	'enlargening',
	'enlightening',
	'enquiring',
	'enshrouding',
	'ensnaring',
	'entangling',
	'entering',
	'entertaining',
	'enthusing',
	'enticing',
	'entreating',
	'entwining',
	'enumerating',
	'enunciating',
	'envelopping',
	'envisioning',
	'envying',
	'equivocating',
	'erasing',
	'escaping',
	'escorting',
	'espying',
	'establishing',
	'estimating',
	'etching',
	'evading',
	'evaluating',
	'evaporating',
	'evoking',
	'exaggerating',
	'examining',
	'excavating',
	'exchanging',
	'exclaiming',
	'excluding',
	'excusing',
	'exhaling',
	'exhibiting',
	'exhorting',
	'existing',
	'exiting',
	'exosculating',
	'expanding',
	'expecting',
	'experiencing',
	'explaining',
	'exploiting',
	'exploring',
	'exposing',
	'expounding',
	'expressing',
	'extending',
	'extinguishing',
	'extracting',
	'extrapolating',
	'extricating',
	'exulting',
	'eying',
	'eyeballing',
	'fabricating',
	'facing',
	'failing',
	'fainting',
	'faking',
	'falling',
	'faltering',
	'familiarizing',
	'fanning',
	'fancying',
	'fantasizing',
	'fastening',
	'favoring',
	'favouring',
	'fawning',
	'fearing',
	'feeding',
	'feeling',
	'feigning',
	'feinting',
	'fencing',
	'fending',
	'ferrying',
	'fetching',
	'fibbing',
	'fiddling',
	'fidgeting',
	'fighting',
	'filing',
	'filling',
	'finalizing',
	'finding',
	'fingering',
	'finishing',
	'fishing',
	'fitting',
	'fixing',
	'flailing',
	'flanking',
	'flapping',
	'flaring',
	'flashing',
	'flattening',
	'flattering',
	'flaunting',
	'fleeing',
	'flexing',
	'flicking',
	'flinching',
	'flinging',
	'flipping',
	'flirting',
	'flitting',
	'floating',
	'flopping',
	'flouncing',
	'floundering',
	'flourishing',
	'flowing',
	'flubbing',
	'fluffing',
	'flushing',
	'fluting',
	'fluttering',
	'flying',
	'foaming',
	'focusing',
	'folding',
	'following',
	'fondling',
	'forbidding',
	'forcing',
	'forecasting',
	'foretelling',
	'forewarning',
	'forging',
	'forgetting',
	'forgiving',
	'forming',
	'forsaking',
	'forumulating',
	'fortifying',
	'framing',
	'freing',
	'freemorphing',
	'freezing',
	'fretting',
	'frightening',
	'frisking',
	'frolicking',
	'frothing',
	'frowning',
	'frying',
	'fulfilling',
	'fumbling',
	'fuming',
	'furling',
	'furrowing',
	'fussing',
	'gabbling',
	'gagging',
	'gallivanting',
	'galloping',
	'gambling',
	'gamboling',
	'gaping',
	'gargling',
	'gashing',
	'gasping',
	'gathering',
	'gauging',
	'gawking',
	'gazing',
	'generalizing',
	'genuflecting',
	'gesticulating',
	'gesturing',
	'geting',
	'gibbering',
	'giggling',
	'giving',
	'glancing',
	'glaring',
	'gliding',
	'glimpsing',
	'gloating',
	'glowing',
	'glowering',
	'gnashing',
	'gnawing',
	'going',
	'goading',
	'gobbling',
	'goggling',
	'goosing',
	'gossiping',
	'gouging',
	'governing',
	'grabbing',
	'grading',
	'granting',
	'grappling',
	'grasping',
	'grating',
	'gravitating',
	'grazing',
	'greeting',
	'grieving',
	'grilling',
	'grimacing',
	'grining',
	'grinding',
	'griping',
	'griping',
	'griting',
	'groaning',
	'grooming',
	'groping',
	'grouching',
	'grounding',
	'groveling',
	'growing',
	'growling',
	'grumbling',
	'grumping',
	'grunting',
	'guaranteeing',
	'guarding',
	'guessing',
	'guffawing',
	'guiding',
	'gulping',
	'gurgling',
	'gushing',
	'guzzling',
	'gyrating',
	'hacking',
	'haggling',
	'hailing',
	'hallucinating',
	'halting',
	'hammering',
	'handing',
	'handling',
	'hanging',
	'harassing',
	'hardening',
	'harking',
	'harming',
	'harmonizing',
	'harrying',
	'harvesting',
	'hassling',
	'hastening',
	'hatching',
	'hating',
	'hauling',
	'heading',
	'head-butting',
	'healing',
	'healthing',
	'hearing',
	'heartening',
	'heating',
	'heaving',
	'heckling',
	'hectoring',
	'hedging',
	'heeding',
	'hefting',
	'helping',
	'heming',
	'heralding',
	'hesitating',
	'hewing',
	'hiccuping',
	'hiding',
	'hiking',
	'hindering',
	'hinting',
	'hissing',
	'hitting',
	'hitching',
	'hoarding',
	'hobbling',
	'hoisting',
	'holding',
	'hollering',
	'honing',
	'honking',
	'hooking',
	'hooting',
	'hoping',
	'hopping',
	'horrifying',
	'hounding',
	'hovering',
	'howling',
	'huddling',
	'huffing',
	'hugging',
	'humming',
	'humiliating',
	'humoring',
	'humouring',
	'hunching',
	'hunting',
	'hurling',
	'hurrahing',
	'hurrying',
	'hurting',
	'hurtling',
	'hushing',
	'hustling',
	'hypnotizing',
	'idealizing',
	'identifying',
	'idolizing',
	'igniting',
	'ignoring',
	'illuminating',
	'illustrating',
	'imagining',
	'imbibing',
	'imitating',
	'immersing',
	'immolating',
	'impairing',
	'impaling',
	'imparting',
	'impeding',
	'implanting',
	'imploring',
	'implying',
	'importing',
	'imposing',
	'impressing',
	'imprinting',
	'imprisoning',
	'improving',
	'improvising',
	'inaugurating',
	'inching',
	'inclining',
	'including',
	'increasing',
	'incriminating',
	'indenting',
	'indicating',
	'inducing',
	'indulging',
	'infecting',
	'inferring',
	'infesting',
	'inflaming',
	'inflating',
	'inflecting',
	'influencing',
	'informing',
	'infusing',
	'ingesting',
	'inhaling',
	'initiating',
	'injecting',
	'injuring',
	'inking',
	'inquiring',
	'inscribing',
	'inserting',
	'insinuating',
	'insisting',
	'inspecting',
	'inspiring',
	'installing',
	'instigating',
	'instructing',
	'insulting',
	'interacting',
	'intercepting',
	'interfering',
	'interjecting',
	'interlacing',
	'interlocking',
	'interpreting',
	'interrogating',
	'interrupting',
	'intertwining',
	'intervening',
	'interviewing',
	'intoning',
	'introducing',
	'inventing',
	'inventorying',
	'inverting',
	'investigating',
	'inviting',
	'invoking',
	'irritating',
	'iterating',
	'jabing',
	'jabbering',
	'jamming',
	'jangling',
	'jeering',
	'jerking',
	'jesting',
	'jibing',
	'jiggling',
	'jingling',
	'jogging',
	'joining',
	'joking',
	'jolting',
	'jostling',
	'judging',
	'juggling',
	'jumbling',
	'jumping',
	'justifying',
	'juting',
	'keening',
	'keeping',
	'kicking',
	'kiding',
	'killing',
	'kissing',
	'kneading',
	'kneeing',
	'kneeling',
	'knitting',
	'knocking',
	'knotting',
	'knowing',
	'kowtowing',
	'labeling',
	'lacing',
	'lamenting',
	'landing',
	'languishing',
	'laping',
	'lashing',
	'latching',
	'lathering',
	'lauding',
	'laughing',
	'launching',
	'lavishing',
	'laying',
	'leading',
	'leafing',
	'leaning',
	'leaping',
	'leaving',
	'lecturing',
	'leering',
	'lending',
	'lengthening',
	'leting',
	'leveling',
	'licensing',
	'licking',
	'lying',
	'lifting',
	'lighting',
	'lightening',
	'liking',
	'lilting',
	'limping',
	'lingering',
	'lisping',
	'listing',
	'listening',
	'living',
	'loading',
	'lobing',
	'locating',
	'locking',
	'loging',
	'loitering',
	'lolling',
	'longing',
	'looking',
	'looming',
	'looping',
	'loosening',
	'loping',
	'losing',
	'lounging',
	'loving',
	'lowering',
	'luging',
	'lulling',
	'lumbering',
	'lunging',
	'lurching',
	'luring',
	'lurking',
	'maintaining',
	'making',
	'maning',
	'managing',
	'maneuvering',
	'mangling',
	'manhandling',
	'manipulating',
	'manufacturing',
	'maping',
	'marching',
	'marking',
	'marketing',
	'marrying',
	'marveling',
	'mashing',
	'masking',
	'massaging',
	'matching',
	'mating',
	'mattering',
	'mauling',
	'maundering',
	'meaning',
	'meandering',
	'measuring',
	'meddling',
	'mediating',
	'meditating',
	'meeping',
	'meeting',
	'melting',
	'memorizing',
	'menacing',
	'mending',
	'mentioning',
	'mentoring',
	'meowing',
	'meshing',
	'mewing',
	'mewling',
	'migrating',
	'milking',
	'miming',
	'mimicking',
	'mincing',
	'minding',
	'mining',
	'mingling',
	'misdirecting',
	'mishearing',
	'misjudging',
	'misleading',
	'mispronouncing',
	'missing',
	'misspelling',
	'mistaking',
	'misunderstanding',
	'mixing',
	'moaning',
	'mocking',
	'modeling',
	'modifying',
	'moistening',
	'molding',
	'molesting',
	'mollifying',
	'mollycoddling',
	'monitoring',
	'mooing',
	'mooring',
	'moping',
	'moring',
	'morphing',
	'moseying',
	'motioning',
	'motivating',
	'moulding',
	'mounting',
	'mourning',
	'mouthing',
	'moving',
	'mowing',
	'muffling',
	'muging',
	'mulling',
	'multiplying',
	'mumbling',
	'munching',
	'murdering',
	'murmuring',
	'musing',
	'mussing',
	'mutilating',
	'muttering',
	'naging',
	'nailing',
	'naming',
	'naping',
	'narrating',
	'narrowing',
	'navigating',
	'neatening',
	'needing',
	'neglecting',
	'negotiating',
	'neighing',
	'nesting',
	'nestling',
	'nevering',
	'nibbling',
	'nicking',
	'nickering',
	'niping',
	'noding',
	'nominating',
	'normalizing',
	'notching',
	'noting',
	'noticing',
	'notifying',
	'nudging',
	'numbering',
	'nursing',
	'nuzzling',
	'obeying',
	'objecting',
	'obliging',
	'observing',
	'obsessing',
	'obtaining',
	'occupying',
	'occuring',
	'offending',
	'offering',
	'officiating',
	'ogling',
	'oozing',
	'opening',
	'operating',
	'opining',
	'opposing',
	'oppugning',
	'opting',
	'orating',
	'ordering',
	'organizing',
	'orienting',
	'originating',
	'ornamenting',
	'osculating',
	'outdoing',
	'outlining',
	'outmaneuvering',
	'outwitting',
	'overbalancing',
	'overbearing',
	'overcoming',
	'overcompensating',
	'overdoing',
	'overdrawing',
	'overflowing',
	'overhearing',
	'overlooking',
	'overpowering',
	'overtaking',
	'overthrowing',
	'overturning',
	'owing',
	'owning',
	'pacing',
	'packing',
	'paddling',
	'painting',
	'palavering',
	'paling',
	'palming',
	'palpating',
	'pampering',
	'panicking',
	'panting',
	'parading',
	'paraphrasing',
	'pardoning',
	'parking',
	'parroting',
	'parrying',
	'parting',
	'participating',
	'passing',
	'pating',
	'patching',
	'patrolling',
	'patronizing',
	'pausing',
	'pawing',
	'paying',
	'pecking',
	'pedaling',
	'peeking',
	'peeling',
	'peeping',
	'peering',
	'pelting',
	'perceiving',
	'perching',
	'perfecting',
	'performing',
	'permitting',
	'persisting',
	'perspiring',
	'persuading',
	'perusing',
	'pestering',
	'peting',
	'philosophizing',
	'phoning',
	'photographing',
	'picking',
	'picturing',
	'piercing',
	'piling',
	'piloting',
	'pining',
	'pinching',
	'pining',
	'pinpointing',
	'pioneering',
	'piping',
	'pitching',
	'pitying',
	'pivoting',
	'placating',
	'placing',
	'plaiting',
	'planing',
	'planting',
	'playing',
	'pleading',
	'pleasing',
	'pledging',
	'ploding',
	'plonking',
	'plopping',
	'plotting',
	'plowing',
	'plucking',
	'pluging',
	'plumping',
	'plunging',
	'pointing',
	'poking',
	'polishing',
	'pondering',
	'pontificating',
	'poping',
	'poring',
	'posing',
	'positioning',
	'possessing',
	'posting',
	'postulating',
	'pouncing',
	'pounding',
	'pouring',
	'pouting',
	'practicing',
	'praising',
	'prancing',
	'prattling',
	'praying',
	'preaching',
	'preceding',
	'predicting',
	'preening',
	'prefering',
	'preparing',
	'prescribing',
	'presenting',
	'preserving',
	'pressing',
	'pressuring',
	'presuming',
	'pretending',
	'prevaricating',
	'preventing',
	'pricking',
	'primping',
	'printing',
	'probing',
	'proceeding',
	'processing',
	'proclaiming',
	'procrastinating',
	'procuring',
	'prodding',
	'producing',
	'professing',
	'proffering',
	'prognosticating',
	'progressing',
	'prohibiting',
	'projecting',
	'promenading',
	'promising',
	'promoting',
	'prompting',
	'pronging',
	'pronouncing',
	'proofreading',
	'propeling',
	'prophesizing',
	'prophesying',
	'proposing',
	'propositioning',
	'prostrating',
	'protecting',
	'protesting',
	'proving',
	'providing',
	'provoking',
	'prowling',
	'prying',
	'publicizing',
	'puckering',
	'puffing',
	'pulling',
	'pummeling',
	'pumping',
	'punching',
	'puncturing',
	'punishing',
	'purchasing',
	'purring',
	'pursing',
	'pursuing',
	'pushing',
	'puting',
	'puttering',
	'quacking',
	'quaffing',
	'quailing',
	'quaking',
	'qualifying',
	'quarrelling',
	'quavering',
	'queueing',
	'querying',
	'questioning',
	'quibbling',
	'quickening',
	'quieting',
	'quipping',
	'quirking',
	'quitting',
	'quivering',
	'quizzing',
	'quoting',
	'racing',
	'radiating',
	'raging',
	'raining',
	'raising',
	'raking',
	'rallying',
	'raming',
	'rambling',
	'ranking',
	'ransacking',
	'ranting',
	'raping',
	'rasping',
	'rating',
	'ratifying',
	'rationalizing',
	'rattling',
	'ravaging',
	'raving',
	'reaching',
	'reacting',
	'reacquainting',
	'reading',
	'readalling',
	'readjusting',
	'readying',
	'reaffirming',
	'realigning',
	'realizing',
	'rearranging',
	'reasoning',
	'reasserting',
	'reassessing',
	'reassuring',
	'reattaching',
	'rebuffing',
	'rebuking',
	'recalling',
	'recapping',
	'receiving',
	'reciprocating',
	'reciting',
	'reckoning',
	'reclaiming',
	'reclining',
	'recognizing',
	'recoiling',
	'recollecting',
	'recommending',
	'reconsidering',
	'reconciling',
	'recording',
	'recounting',
	'recovering',
	'recruiting',
	'recuperating',
	'recruiting',
	'reddening',
	'redirecting',
	'rediscovering',
	'reducing',
	'reeling',
	're-evaluating',
	'referring',
	'referencing',
	'refilling',
	'refining',
	'reflecting',
	'refocusing',
	'refraining',
	'refusing',
	'refuting',
	'regaining',
	'regaling',
	'regarding',
	'regretting',
	'regulating',
	'rehabilitating',
	'reigning',
	'reinforcing',
	'reintroducing',
	'reiterating',
	'rejecting',
	'rejoicing',
	'relating',
	'relaxing',
	'relaying',
	'releasing',
	'relenting',
	'relinquishing',
	'relishing',
	'relying',
	'remaining',
	'remarking',
	'remembering',
	'reminding',
	'reminiscing',
	'remonstrating',
	'removing',
	'rending',
	'rendering',
	'reorganizing',
	'repacking',
	'repairing',
	'repeating',
	'repeling',
	'repenting',
	'rephrasing',
	'replacing',
	'replying',
	'reporting',
	'repositioning',
	'representing',
	'repressing',
	'reprimanding',
	'reproaching',
	'reproducing',
	'repudiating',
	'repulsing',
	'requesting',
	'rescinding',
	'rescuing',
	'researching',
	'resenting',
	'residing',
	'resigning',
	'resisting',
	'resolving',
	'respecting',
	'responding',
	'resting',
	'restating',
	'restraining',
	'restructuring',
	'resuming',
	'retaliating',
	'retching',
	'retelling',
	'retiring',
	'retorting',
	'retracting',
	'retreating',
	'retrieving',
	'returning',
	'revealing',
	'reveling',
	'revering',
	'reversing',
	'reverting',
	'reviewing',
	'revising',
	'revoking',
	'rewarding',
	'rewording',
	'rhapsodizing',
	'rhyming',
	'riding',
	'riddling',
	'riding',
	'ridiculing',
	'riffling',
	'rifling',
	'ringing',
	'rinsing',
	'riping',
	'riposting',
	'rising',
	'risking',
	'roaming',
	'roaring',
	'roasting',
	'robing',
	'rocking',
	'rolling',
	'romping',
	'roting',
	'rotating',
	'rounding',
	'rousing',
	'rubing',
	'ruffling',
	'ruining',
	'ruling',
	'rumbling',
	'ruminating',
	'rummaging',
	'rumormongering',
	'runing',
	'rushing',
	'rustling',
	'sacking',
	'sailing',
	'salivating',
	'saluting',
	'salvaging',
	'sashaying',
	'satirizing',
	'satisfying',
	'saturating',
	'sauntering',
	'savaging',
	'saving',
	'savoring',
	'savouring',
	'sawing',
	'saying',
	'scaling',
	'scampering',
	'scanning',
	'scaring',
	'scarring',
	'scattering',
	'scheduling',
	'scheming',
	'schooling',
	'scoffing',
	'scolding',
	'scooping',
	'scooting',
	'scoring',
	'scorching',
	'scorning',
	'scouring',
	'scowling',
	'scrambling',
	'scraping',
	'scratching',
	'scrawling',
	'screaming',
	'screeching',
	'screwing',
	'scribbling',
	'scribing',
	'scrubbing',
	'scrunching',
	'scrutinizing',
	'scuffing',
	'scurrying',
	'scuttling',
	'sealing',
	'seaming',
	'searching',
	'sectioning',
	'securing',
	'seing',
	'seeking',
	'seeming',
	'seeping',
	'seething',
	'seizing',
	'selecting',
	'selling',
	'sensing',
	'sentencing',
	'separating',
	'serenading',
	'serving',
	'servicing',
	'settling',
	'severing',
	'sewing',
	'shading',
	'shaking',
	'shambling',
	'shaping',
	'sharing',
	'sharpening',
	'shattering',
	'shaving',
	'shearing',
	'sheathing',
	'shedding',
	'sheltering',
	'shielding',
	'shifting',
	'shining',
	'shirking',
	'shivering',
	'shocking',
	'shooing',
	'shooting',
	'shoping',
	'shortening',
	'shouldering',
	'shouting',
	'shoving',
	'shoveling',
	'showing',
	'showcasing',
	'showering',
	'shredding',
	'shrieking',
	'shrinking',
	'shrugging',
	'shuddering',
	'shuffling',
	'shushing',
	'shuting',
	'sidestepping',
	'sidling',
	'sifting',
	'sighing',
	'signing',
	'signaling',
	'silencing',
	'simmering',
	'simpering',
	'simplifying',
	'sinning',
	'singing',
	'sinking',
	'siping',
	'siting',
	'sizing',
	'sketching',
	'skewering',
	'skiing',
	'skiding',
	'skimming',
	'skipping',
	'skittering',
	'skulking',
	'slaming',
	'slandering',
	'slaping',
	'slashing',
	'slathering',
	'slaying',
	'sleeping',
	'slicing',
	'slicking',
	'sliding',
	'slinging',
	'slinking',
	'sliping',
	'sliting',
	'slithering',
	'slobbering',
	'sloshing',
	'slouching',
	'slowing',
	'slumbering',
	'slumping',
	'slurring',
	'slurping',
	'smacking',
	'smashing',
	'smearing',
	'smelling',
	'smiling',
	'smirking',
	'smiting',
	'smoking',
	'smoldering',
	'smooching',
	'smoothing',
	'smothering',
	'smouldering',
	'smudging',
	'smushing',
	'snaking',
	'snaping',
	'snarling',
	'snatching',
	'sneaking',
	'sneering',
	'sneezing',
	'snickering',
	'sniffing',
	'sniffling',
	'sniggering',
	'sniping',
	'sniping',
	'snitching',
	'sniveling',
	'snoozing',
	'snoring',
	'snorting',
	'snowing',
	'snubing',
	'snuffing',
	'snuffling',
	'snuggling',
	'soaking',
	'sobbing',
	'sobering',
	'socialing',
	'socializing',
	'softening',
	'solving',
	'somersaulting',
	'soothing',
	'soothsaying',
	'sorting',
	'soughing',
	'sounding',
	'sowing',
	'spanning',
	'spanking',
	'sparing',
	'sparking',
	'sparkling',
	'spasming',
	'speaking',
	'specifying',
	'speculating',
	'speeding',
	'spelling',
	'spending',
	'spiking',
	'spilling',
	'spinning',
	'spiting',
	'spiting',
	'splashing',
	'splaying',
	'splintering',
	'splitting',
	'spoiling',
	'spotting',
	'sprawling',
	'spraying',
	'spreading',
	'springing',
	'sprinkling',
	'sprinting',
	'sprouting',
	'spuring',
	'spurning',
	'sputtering',
	'spying',
	'squalling',
	'squaring',
	'squashing',
	'squatting',
	'squawking',
	'squeaking',
	'squealing',
	'squeezing',
	'squinting',
	'squirming',
	'squirting',
	'squishing',
	'stabing',
	'stabilizing',
	'stacking',
	'staggering',
	'staining',
	'stalking',
	'stalling',
	'stammering',
	'stamping',
	'standing',
	'staring',
	'starting',
	'startling',
	'stashing',
	'stating',
	'stationing',
	'staying',
	'steadying',
	'stealing',
	'steepling',
	'steering',
	'stepping',
	'sticking',
	'stiffening',
	'stifling',
	'stilling',
	'stimulating',
	'stinging',
	'stinking',
	'stipulating',
	'stirring',
	'stitching',
	'stocking',
	'stockpiling',
	'stoking',
	'stomping',
	'stooping',
	'stoping',
	'storing',
	'storming',
	'stowing',
	'straddling',
	'straightening',
	'straining',
	'strangling',
	'strapping',
	'straying',
	'streaking',
	'streamlining',
	'strengthening',
	'stressing',
	'stretching',
	'striding',
	'striking',
	'stringing',
	'striping',
	'striving',
	'stroking',
	'strolling',
	'structuring',
	'struggling',
	'strumming',
	'strutting',
	'studying',
	'stuffing',
	'stumbling',
	'stumping',
	'stuttering',
	'styling',
	'subduing',
	'submerging',
	'submitting',
	'subsiding',
	'subtracting',
	'succeeding',
	'succumbing',
	'sucking',
	'submersing',
	'suffering',
	'suggesting',
	'suiting',
	'sulking',
	'summarizing',
	'summoning',
	'sundering',
	'supervising',
	'supplementing',
	'supplying',
	'supporting',
	'supposing',
	'surging',
	'surmising',
	'surprising',
	'surrendering',
	'surrounding',
	'surveying',
	'suspecting',
	'suspending',
	'susurrating',
	'swabbing',
	'swaggering',
	'swallowing',
	'swating',
	'swaying',
	'swearing',
	'sweating',
	'sweeping',
	'swelling',
	'swerving',
	'swooning',
	'swilling',
	'swimming',
	'swinging',
	'swiping',
	'swirling',
	'swishing',
	'switching',
	'swiveling',
	'symbolizing',
	'sympathizing',
	'systemizing',
	'tabulating',
	'tackling',
	'tailoring',
	'taking',
	'talking',
	'tallying',
	'taming',
	'tangling',
	'tantalizing',
	'tapping',
	'targeting',
	'tasking',
	'tasting',
	'tattling',
	'tattooing',
	'taunting',
	'teaching',
	'tearing',
	'teasing',
	'teetering',
	'telephoning',
	'telling',
	'tempering',
	'tempting',
	'tending',
	'tensing',
	'terrifying',
	'testing',
	'testifying',
	'thanking',
	'thawing',
	'theorizing',
	'thinking',
	'thrashing',
	'threading',
	'threatening',
	'thriving',
	'throttling',
	'throwing',
	'thrusting',
	'thumping',
	'thundering',
	'thwacking',
	'thwapping',
	'ticking',
	'tickling',
	'tidying',
	'tightening',
	'tilting',
	'tingling',
	'tinkering',
	'tinkling',
	'tipping',
	'tiptoeing',
	'tiring',
	'tisking',
	'tittering',
	'toasting',
	'toddling',
	'toeing',
	'toiling',
	'tolerating',
	'tooting',
	'toppling',
	'tossing',
	'toting',
	'tottering',
	'touching',
	'toughening',
	'touring',
	'tousling',
	'towing',
	'towering',
	'toying',
	'tracing',
	'tracking',
	'trading',
	'trailing',
	'training',
	'traipsing',
	'tramping',
	'trampling',
	'transcribing',
	'transferring',
	'transforming',
	'translating',
	'transmitting',
	'transporting',
	'trapping',
	'travelling',
	'traversing',
	'treading',
	'treasuring',
	'treating',
	'trembling',
	'tricking',
	'trilling',
	'trimming',
	'tripping',
	'triumphing',
	'trivializing',
	'trotting',
	'troubling',
	'troubleshooting',
	'trouncing',
	'trudging',
	'trumpeting',
	'trundling',
	'trusting',
	'trying',
	'tucking',
	'tugging',
	'tumbling',
	'tuning',
	'turning',
	'tutoring',
	'tweaking',
	'tweezing',
	'twiddling',
	'twining',
	'twinkling',
	'twirling',
	'twisting',
	'twitching',
	'twittering',
	'typing',
	'ululating',
	'unbending',
	'unbinding',
	'unbraiding',
	'unbuckling',
	'unbuttoning',
	'unclasping',
	'unclenching',
	'uncoiling',
	'uncovering',
	'uncrossing',
	'uncurling',
	'undergoing',
	'understanding',
	'understating',
	'undertaking',
	'undoing',
	'undressing',
	'undulating',
	'unfastening',
	'unfocusing',
	'unfolding',
	'unfurling',
	'unhanding',
	'unhooking',
	'unifying',
	'uniting',
	'unknoting',
	'unlacing',
	'unleashing',
	'unlocking',
	'unmaking',
	'unmasking',
	'unpacking',
	'unraveling',
	'unrolling',
	'untangling',
	'untucking',
	'untwining',
	'untwisting',
	'unveiling',
	'unwielding',
	'unwinding',
	'unwrapping',
	'updating',
	'upgrading',
	'upholding',
	'upsetting',
	'urging',
	'using',
	'ushering',
	'utilizing',
	'uttering',
	'vaping',
	'vacillating',
	'validating',
	'vanishing',
	'vaulting',
	'veering',
	'venting',
	'venturing',
	'verbalizing',
	'verifying',
	'vexing',
	'vibrating',
	'viewing',
	'visiting',
	'visualizing',
	'vituperating',
	'vocalizing',
	'vociferating',
	'volleying',
	'volunteering',
	'vomiting',
	'voting',
	'vouching',
	'vowing',
	'waddling',
	'wading',
	'wafting',
	'wagging',
	'wagering',
	'waggling',
	'wailing',
	'waiting',
	'waking',
	'walking',
	'walloping',
	'wallowing',
	'waltzing',
	'wandering',
	'wanting',
	'warbling',
	'warming',
	'warning',
	'warping',
	'washing',
	'wasting',
	'watching',
	'watering',
	'waving',
	'wavering',
	'wearing',
	'weaving',
	'wedging',
	'weeping',
	'weighing',
	'welcoming',
	'wetting',
	'whacking',
	'wheedling',
	'wheezing',
	'whimpering',
	'whining',
	'whinnying',
	'whipping',
	'whirling',
	'whisking',
	'whispering',
	'whistling',
	'whittling',
	'whooping',
	'widening',
	'wielding',
	'wiggling',
	'wilting',
	'winning',
	'wincing',
	'winding',
	'windmilling',
	'winking',
	'wiping',
	'wishing',
	'withdrawing',
	'withholding',
	'withstanding',
	'witnessing',
	'wobbling',
	'wondering',
	'wooing',
	'working',
	'worrying',
	'worshipping',
	'wracking',
	'wrangling',
	'wrapping',
	'wrecking',
	'wrenching',
	'wrestling',
	'wriggling',
	'wringing',
	'wrinkling',
	'writing',
	'writhing',
	'x-irradiating',
	'x-raying',
	'xeriscape',
	'xeroxing',
	'xylographing',
	'yanking',
	'yapping',
	'yawning',
	'yawping',
	'yearning',
	'yelling',
	'yelping',
	'yielding',
	'yodelling',
	'yowling',
	'zipping',
	'zooming'
];
